<template>
    <div class="container-fluid p-3 bg-light">

        <!-- Header -->
        <span v-if="convertedAmount" class="converted-result">
            {{ amount }} {{ fromCurrency }} → <strong>{{ convertedAmount }} {{ toCurrency }}</strong>
        </span>

        <!-- Body -->
        <div class="row mb-2 mt-5">

            <div class="col-lg-5 col-md-5 col-sm-12 text-center d-flex gap-1">
                <a-input-number v-model:value="amount" style="width: 80%" :min="0" :max="1000000000" :precision="2"
                    size="large" placeholder="Số tiền" :formatter="formatCurrency" />
                <a-select v-model:value="fromCountry" style="width: 50%" allowClear placeholder="Chọn quốc gia đầu"
                    show-search :filter-option="filterOption" size="large" option-label-prop="label"
                    :options="countries" :loading="loading">
                    <template #option="{ value, label, flag, currency }">
                        <img :src="flag" class="flag-icon" />
                        &nbsp;&nbsp;{{ label }} ({{ currency }})
                    </template>
                </a-select>
            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 text-center bg-light">
                <SwapOutlined style="font-size: 32px; color: #1890ff;" />
            </div>

            <div class="col-lg-5 col-md-5 col-sm-12 text-center d-flex gap-1">
                <a-input-number v-model:value="exchangeRate" style="width: 80%" :min="0" :max="1000000000"
                    :precision="2" size="large" placeholder="Chuyển đổi thành" :formatter="formatCurrency" />
                <a-select v-model:value="toCountry" style="width: 50%" allowClear placeholder="Chọn quốc gia cuối"
                    show-search :filter-option="filterOption" size="large" option-label-prop="label"
                    :options="countries" :loading="loading">
                    <template #option="{ value, label, flag, currency }">
                        <img :src="flag" class="flag-icon" />
                        &nbsp;&nbsp;{{ label }} ({{ currency }})
                    </template>
                </a-select>
            </div>

        </div>

        <!-- Footer -->
        <div class="row">
            <div class="col-12 text-center">
                <a-button type="dashed" :disabled="!fromCountry || !toCountry || isFetchingRate"
                    @click="fetchExchangeRate">
                    <template v-if="isFetchingRate">
                        <a-spin />
                    </template>
                    <template v-else>
                        Chuyển đổi
                    </template>
                </a-button>
                <hr v-if="convertedAmount" />
                <span v-if="convertedAmount">
                    Quy đổi: 
                </span>
                <span v-if="convertedAmount" class="result">{{ convertedAmount }} {{ toCurrency }}</span>
            </div>
        </div>
        <div class="row" v-if="convertedAmount">
            <div class="col-md-12 update-info">
                <span>Thông tin cập nhật</span>
                <a-divider />
                <p>Cập nhật lần cuối: <strong>{{ lastUpdate }}</strong></p>
                <p>Lần cập nhật tiếp theo: <strong>{{ nextUpdate }}</strong></p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { SwapOutlined } from '@ant-design/icons-vue';
import axios from 'axios';

// Khai báo biến
const amount = ref(null);
const fromCountry = ref(null);
const toCountry = ref(null);
const countries = ref([]);
const exchangeRate = ref(null);
const loading = ref(true);
const lastUpdate = ref(null);
const nextUpdate = ref(null);
const isFetchingRate = ref(false);

// Bắt sự kiện khi component được tạo
onMounted(async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        countries.value = response.data
            .filter(country => country.currencies)
            .map(country => {
                const currencyCode = Object.keys(country.currencies)[0];
                return {
                    value: country.cca2,
                    label: country.translations.vie?.common || country.name.common,
                    flag: country.flags.svg,
                    currency: currencyCode
                };
            });
    } catch (error) {
        console.error('Lỗi tải danh sách quốc gia:', error);
    } finally {
        loading.value = false;
    }
});

// Hàm định dạng số tiền có dấu chấm ngăn
const formatCurrency = value => {
    if (!value) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Kiểm tra số tiền hợp lệ
const isValidAmount = computed(() => amount.value > 0);

// Lấy mã tiền tệ của quốc gia đã chọn
const fromCurrency = computed(() => {
    return countries.value.find(c => c.value === fromCountry.value)?.currency;
});

// Lấy mã tiền tệ của quốc gia đã chọn
const toCurrency = computed(() => {
    return countries.value.find(c => c.value === toCountry.value)?.currency;
});

// Hàm tìm kiếm quốc gia
const filterOption = (input, option) => {
    return option?.label?.toLowerCase().includes(input.toLowerCase());
};

// Lấy tỷ giá chuyển đổi
const fetchExchangeRate = async () => {
    if (!fromCurrency.value || !toCurrency.value) return;
    isFetchingRate.value = true;
    try {
        const response = await axios.get(`https://open.er-api.com/v6/latest/${fromCurrency.value}`);
        exchangeRate.value = response.data.rates[toCurrency.value] || null;
        lastUpdate.value = response.data.time_last_update_utc;
        nextUpdate.value = response.data.time_next_update_utc;
    } catch (error) {
        console.error('Lỗi khi lấy tỷ giá:', error);
    } finally {
        isFetchingRate.value = false;
    }
};

// Số tiền chuyển đổi
const convertedAmount = computed(() => {
    if (!amount.value || !exchangeRate.value) return null;
    return (amount.value * exchangeRate.value).toFixed(2);
});

</script>

<style>
.flag-icon {
    width: 24px;
    height: 16px;
    object-fit: cover;
    border-radius: 2px;
}

.update-info {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    border-left: 5px solid #409cff;
}

.update-info span {
    font-weight: bold;
    color: #409cff;
    font-size: 18px;
}

.update-info p {
    margin: 5px 0;
}

.result {
    font-size: 18px;
    font-weight: bold;
    color: #1890ff;
}
</style>
