export interface AgencyI {
	id?: number;
	agencia: string;
	distrito: string;
	provincia: string;
	departamento: string;
	direccion: string;
	lat: number;
	lon: number;
	image?: string;
	favorite?: boolean;
}