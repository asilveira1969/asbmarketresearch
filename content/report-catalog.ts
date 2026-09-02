import type { Locale } from "@/config/locales";
export type ReportCatalogDetails={country:string;industry:string;topics:string[];year:number};
const e=(year:number,country:string,industry:string,topics:string[]):ReportCatalogDetails=>({year,country,industry,topics});
export const reportCatalog:Record<string,Record<Locale,ReportCatalogDetails>>={
"latam-b2b-software-expansion-snapshot":{es:e(2025,"Brasil","Food & beverage",["vino","exportaciones"]),en:e(2025,"Brazil","Food & beverage",["wine","exports"]),pt:e(2025,"Brasil","Alimentos e bebidas",["vinho","exportacoes"])},
"premium-food-category-benchmark":{es:e(2025,"Uruguay","Economia",["economia","indicadores"]),en:e(2025,"Uruguay","Economy",["economy","indicators"]),pt:e(2025,"Uruguai","Economia",["economia","indicadores"])},
"investor-market-scoping-note":{es:e(2025,"Italia","Automocion",["sentimiento","vehiculos"]),en:e(2025,"Italy","Automotive",["sentiment","vehicles"]),pt:e(2025,"Italia","Automotivo",["sentimento","veiculos"])},
"consumer-sentiment-template":{es:e(2025,"Alemania","Restaurantes",["leads","restaurantes"]),en:e(2025,"Germany","Restaurants",["leads","restaurants"]),pt:e(2025,"Alemanha","Restaurantes",["leads","restaurantes"])},
"competitive-benchmark-template":{es:e(2025,"Italia","Tecnologia movil",["smartphones","competencia"]),en:e(2025,"Italy","Mobile technology",["smartphones","competition"]),pt:e(2025,"Italia","Tecnologia movel",["smartphones","concorrencia"])},
"country-market-template":{es:e(2025,"Costa Rica","Economia",["indicadores","economia"]),en:e(2025,"Costa Rica","Economy",["indicators","economy"]),pt:e(2025,"Costa Rica","Economia",["indicadores","economia"])},
"smartphone-sales-in-spain":{es:e(2026,"Espana","Tecnologia movil",["smartphones","demanda"]),en:e(2026,"Spain","Mobile technology",["smartphones","demand"]),pt:e(2026,"Espanha","Tecnologia movel",["smartphones","demanda"])},
"smartphone-sales-in-germany":{es:e(2026,"Alemania","Tecnologia movil",["smartphones","demanda"]),en:e(2026,"Germany","Mobile technology",["smartphones","demand"]),pt:e(2026,"Alemanha","Tecnologia movel",["smartphones","demanda"])},
"italy-refurbished-smartphone-market":{es:e(2025,"Italia","Tecnologia movil",["reacondicionados","adopcion"]),en:e(2025,"Italy","Mobile technology",["refurbished","adoption"]),pt:e(2025,"Italia","Tecnologia movel",["recondicionados","adocao"])}};