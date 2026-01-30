"use client";

import { Button } from "@/components/ui/button";
import { useSettings } from "@/store/useSettings";
import { Globe } from "lucide-react";

export function SettingsSwitcher() {
    const { currency, language, setCurrency, setLanguage } = useSettings();

    const toggleSettings = () => {
        // シンプルなトグル動作: JPY/JA <-> USD/EN
        if (currency === 'JPY') {
            setCurrency('USD');
            setLanguage('en');
        } else {
            setCurrency('JPY');
            setLanguage('ja');
        }
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleSettings}
            className="flex items-center gap-2"
        >
            <Globe className="h-4 w-4" />
            <span>{currency}</span>
            <span className="text-muted-foreground">/</span>
            <span>{language.toUpperCase()}</span>
        </Button>
    );
}
