  /**
   * @param { Object } where Loopback's where syntax - Example: { where : {property: "text to match"} }
   * @param { string | string[] } include Loopback's include - Example: "myrelation1" | ["myrelation1", "myrelation2"] => Get records with the related objects.
   * @param { number } limit Loopback's limit - Example: 10 => Get maximum 10 records.
   * @param { number } skip Loopback's skip - Example: 10 => Skip first 10 records.
   * @param { string | string[] } order Loopback's order - Example: "property ASC" or ["property ASC", "property2 DESC"] => Get records with the wanted order.
   * @param { Object } fields Loopback's fields - Example: { property1: true, property2: true } => Get records only with two properties.
   */
export interface FilterPropertiesInterface {
    where?: any,
    include?: string | any[],
    limit?: number,
    skip?: number,
    order?: string | string[],
    fields?: any
}
