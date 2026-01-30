import { Currency } from '@/store/useSettings';

// 仮の為替レート (Base: JPY, but we will treat data as source of truth)
// Since user requested fixed display in AUD, we will treat the raw data as AUD for simplicity in this template context
// Or if data is JPY, we convert. Let's assume raw data is JPY for now to keep consistency if we switch back, 
// BUT for "Fixed AUD", it's better to just say raw data is AUD or convert JPY to AUD.
// Given previous prices were 8500 JPY, 8500 AUD is too high.
// Let's assume 100 JPY approx 1 AUD for easy mental math? (Actually 1 AUD ~ 100 JPY is close).
// So 8500 JPY -> 85.00 AUD.

const EXCHANGE_RATES = {
    JPY: 1,
    USD: 0.0067,
    AUD: 0.01, // Approx 100 JPY = 1 AUD
};

export function convertPrice(priceInJpy: number, currency: Currency): number {
    if (currency === 'JPY') {
        return priceInJpy;
    }
    return priceInJpy * EXCHANGE_RATES[currency]; // Simple conversion
}

export function formatPrice(priceInJpy: number, currency: Currency): string {
    const convertedPrice = convertPrice(priceInJpy, currency);

    if (currency === 'JPY') {
        return new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
        }).format(convertedPrice);
    }

    if (currency === 'AUD') {
        return new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD',
        }).format(convertedPrice);
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(convertedPrice);
}

export function getCurrencySymbol(currency: Currency): string {
    switch (currency) {
        case 'JPY':
            return '¥';
        case 'USD':
        case 'AUD':
            return '$';
        default:
            return '';
    }
}
