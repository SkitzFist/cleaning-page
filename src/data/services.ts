export interface ServiceOption {
	value: string;
	label: string;
	pricePerSqm: number;
}

export const serviceOptions: ServiceOption[] = [
	{ value: 'hem', label: 'Hem', pricePerSqm: 0 },
	{ value: 'flytt', label: 'Flytt', pricePerSqm: 0 },
	{ value: 'dödsbo', label: 'Dödsbo', pricePerSqm: 0 },
	{ value: 'bygg', label: 'Bygg', pricePerSqm: 0 },
	{ value: 'storstäd', label: 'Storstäd', pricePerSqm: 0 },
	{ value: 'fönsterputs', label: 'Fönsterputs', pricePerSqm: 0 },
	{ value: 'kontor', label: 'Kontor', pricePerSqm: 0 },
	{ value: 'trapphus', label: 'Trapphus', pricePerSqm: 0 },
	{ value: 'övrigt', label: 'Övrigt', pricePerSqm: 0 }
];
