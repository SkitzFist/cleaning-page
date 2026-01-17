export interface ServiceOption {
	value: string;
	label: string;
	pricePerSqm: number;
}

export const serviceOptions: ServiceOption[] = [
	{ value: 'hem', label: 'Hem', pricePerSqm: 10 },
	{ value: 'flytt', label: 'Flytt', pricePerSqm: 10 },
	{ value: 'dödsbo', label: 'Dödsbo', pricePerSqm: 10 },
	{ value: 'bygg', label: 'Bygg', pricePerSqm: 10 },
	{ value: 'storstäd', label: 'Storstäd', pricePerSqm: 10 },
	{ value: 'fönsterputs', label: 'Fönsterputs', pricePerSqm: 10 },
	{ value: 'kontor', label: 'Kontor', pricePerSqm: 10 },
	{ value: 'trapphus', label: 'Trapphus', pricePerSqm: 10 },
	{ value: 'övrigt', label: 'Övrigt', pricePerSqm: 10 }
];

export const serviceCards = serviceOptions.map((service) => ({
	...service,
	priceLabel: service.pricePerSqm > 0 ? `${service.pricePerSqm} kr/kvm` : 'Pris kommer'
}));
