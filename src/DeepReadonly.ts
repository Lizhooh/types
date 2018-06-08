export type DeepReadonly<T, K extends keyof T = keyof T> =
    T extends object ?
        { +readonly [key in K]: DeepReadonly<T[key]> } :
        T
//
// const a: DeepReadonly<DeepNonNullable<{
//     b?: {
//         readonly c: {
//             d: 'd'
//         }
//     }
// }>> = {} as any
//
// a.b.c.d = 'd'
