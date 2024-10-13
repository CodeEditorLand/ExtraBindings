/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface Diagnostic {
	level: string;
	message: string;
	span: any;
}
export interface TransformOutput {
	errors?: Array<Diagnostic>;
}
export function lint(
	code: Buffer,
	opts: Buffer,
	signal?: AbortSignal | undefined | null,
): Promise<TransformOutput>;
export function lintSync(code: Buffer, opts: Buffer): TransformOutput;
