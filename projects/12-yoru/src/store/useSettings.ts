import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Currency = 'JPY' | 'USD' | 'AUD';
export type Language = 'ja' | 'en';
export type Country = 'JP' | 'US' | 'AU';

interface SettingsState {
    currency: Currency;
    language: Language;
    country: Country;
    setCurrency: (currency: Currency) => void;
    setLanguage: (language: Language) => void;
    setCountry: (country: Country) => void;
}

export const useSettings = create<SettingsState>()(
    persist(
        (set) => ({
            currency: 'JPY',
            language: 'ja',
            country: 'JP',
            setCurrency: (currency) => set({ currency }),
            setLanguage: (language) => set({ language }),
            setCountry: (country) => set({ country }),
        }),
        {
            name: 'settings-storage-v2', // Changed to invalidate old cache (JPY) and force AUD
        }
    )
);
