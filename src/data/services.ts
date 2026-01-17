export interface FrequencyOption {
	value: string;
	label: string;
	multiplier: number;
}

export interface ServiceOption {
	value: string;
	label: string;
	pricePerSqm: number;
	repeatable: boolean;
	frequencyOptions: FrequencyOption[];
}

const repeatableFrequencyOptions: FrequencyOption[] = [
	{ value: 'weekly', label: 'Varje vecka', multiplier: 1 },
	{ value: 'biweekly', label: 'Varannan vecka', multiplier: 1 },
	{ value: 'monthly', label: 'Varje månad', multiplier: 1 }
];

export const serviceOptions: ServiceOption[] = [
	{ value: 'hem', label: 'Hem', pricePerSqm: 10, repeatable: true, frequencyOptions: repeatableFrequencyOptions },
	{ value: 'flytt', label: 'Flytt', pricePerSqm: 10, repeatable: false, frequencyOptions: [] },
	{ value: 'dödsbo', label: 'Dödsbo', pricePerSqm: 10, repeatable: false, frequencyOptions: [] },
	{ value: 'bygg', label: 'Bygg', pricePerSqm: 10, repeatable: false, frequencyOptions: [] },
	{ value: 'storstäd', label: 'Storstäd', pricePerSqm: 10, repeatable: true, frequencyOptions: repeatableFrequencyOptions },
	{ value: 'fönsterputs', label: 'Fönsterputs', pricePerSqm: 10, repeatable: true, frequencyOptions: repeatableFrequencyOptions },
	{ value: 'kontor', label: 'Kontor', pricePerSqm: 10, repeatable: true, frequencyOptions: repeatableFrequencyOptions },
	{ value: 'trapphus', label: 'Trapphus', pricePerSqm: 10, repeatable: true, frequencyOptions: repeatableFrequencyOptions },
	{ value: 'övrigt', label: 'Övrigt', pricePerSqm: 10, repeatable: true, frequencyOptions: repeatableFrequencyOptions }
];

export const serviceCards = serviceOptions.map((service) => ({
	...service,
	priceLabel: service.pricePerSqm > 0 ? `${service.pricePerSqm} kr/kvm` : 'Pris kommer'
}));
