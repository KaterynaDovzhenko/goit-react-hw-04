import axios from "axios";

export const fetchImages = async (value, currentPage) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: value,
        page: currentPage,
      },
      headers: {
        Authorization: "Client-ID 6iUluOeTzK22BMcX1HLHpS-4uq3_TNecfNb_HR7BhoM",
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
