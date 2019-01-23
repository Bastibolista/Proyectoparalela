export class LogUsuario{
	constructor(
		public password:string,
		public rut:string
	){}

}

export class GetUsuario{
	constructor(
		public ordinal:string,
		public subjectCode:string,
		public year:string
	){}

}

export class User{
	constructor(
		public apiKey:string,
		public authdata:string,
		public email:string,
		public role:string,
		public rut:string
	){}

}

export class setUser{
	
	constructor(
		public apiKey:string,
		public rut:string

	) {}
}
