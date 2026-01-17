export interface ServiceOption {
	value: string;
	label: string;
}

export const serviceOptions: ServiceOption[] = [
	{ value: 'hem', label: 'Hem' },
	{ value: 'flytt', label: 'Flytt' },
	{ value: 'dödsbo', label: 'Dödsbo' },
	{ value: 'bygg', label: 'Bygg' },
	{ value: 'storstäd', label: 'Storstäd' },
	{ value: 'fönsterputs', label: 'Fönsterputs' },
	{ value: 'kontor', label: 'Kontor' },
	{ value: 'trapphus', label: 'Trapphus' },
	{ value: 'övrigt', label: 'Övrigt' }
];
