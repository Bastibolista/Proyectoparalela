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

