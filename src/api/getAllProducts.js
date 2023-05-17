import axios from "axios";

export const getAllProductsMethod = async (
  shopId,
  apiKey,
  apiSecret,
  options
) => {
  if (options.page == null || options.size == null) {
    throw Error("Please provide page and size properly");
  }

  const token = btoa(`${apiKey}:${apiSecret}`);

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      `https://api.trendyol.com/sapigw/suppliers/${shopId}/products` +
      `?page=${options.page}&size=${options.size}&approved=True` +
      (options.dateType ? `&dateQueryType=${options.dateType}` : "") +
      (options.startDate ? `&startDate=${options.startDate}` : "") +
      (options.onSale ? `&onSale=${options.onSale}` : ""),
    headers: {
      Authorization: "Basic " + token,
    },
    maxRedirects: 0,
  };

  try {
    const response = await axios(config);
    const result = response.data;
    return result;
  } catch (error) {
    throw Error("Failed to fetch products: " + error.message);
  }
};
