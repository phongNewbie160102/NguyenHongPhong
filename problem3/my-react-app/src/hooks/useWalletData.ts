import { useState, useEffect } from "react";

interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string;
}

export const useWalletBalances = (): WalletBalance[] => {
    const [balances, setBalances] = useState<WalletBalance[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setBalances([
                { currency: "USDT", amount: 100, blockchain: "Ethereum" },
                { currency: "BTC", amount: 0.5, blockchain: "Osmosis" },
                { currency: "ETH", amount: 2, blockchain: "Ethereum" },
                { currency: "BNB", amount: 0, blockchain: "Binance" }, // Sẽ bị lọc
            ]);
        }, 1000);
    }, []);

    return balances;
};

export const usePrices = (): Record<string, number> => {
    return {
        USDT: 1,
        BTC: 50000,
        ETH: 3000,
        BNB: 400,
    };
};
