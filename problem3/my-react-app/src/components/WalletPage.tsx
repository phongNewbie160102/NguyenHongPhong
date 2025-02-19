import { useMemo } from "react";
import { useWalletBalances, usePrices } from "../hooks/useWalletData";
import styles from "../assets/WalletPage.module.css";

// Định nghĩa kiểu dữ liệu cho số dư ví
interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string;
}

// Hàm xác định độ ưu tiên của blockchain để sắp xếp
const getPriority = (blockchain: string): number => {
    const priorities: Record<string, number> = {
        Osmosis: 100,
        Ethereum: 50,
        Arbitrum: 30,
        Zilliqa: 20,
        Neo: 20
    };
    return priorities[blockchain] ?? -99;
};

const WalletPage: React.FC = () => {
    const balances: WalletBalance[] = useWalletBalances();
    const prices: Record<string, number> = usePrices();

    // Sắp xếp danh sách số dư
    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance) => balance.amount > 0 && getPriority(balance.blockchain) > -99)
            .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain));
    }, [balances]);

    // Kiểm tra nếu chưa load giá
    if (Object.keys(prices).length === 0) {
        return <div>Loading prices...</div>;
    }

    return (
        <div className={styles.container}>
            <h2>Wallet Balances</h2>
            {sortedBalances.map((balance) => (
                <div key={balance.currency} className={styles.balanceItem}>
                    <p>
                        {balance.currency}: {balance.amount.toFixed(2)} (Blockchain: {balance.blockchain})
                    </p>
                    <p>USD Value: ${(prices[balance.currency] * balance.amount).toFixed(2)}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default WalletPage;
