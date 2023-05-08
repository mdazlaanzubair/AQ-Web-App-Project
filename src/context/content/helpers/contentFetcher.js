import axios from "axios";

export const aboutContentDB = {
  fetch: () => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "https://test.rkcustomapparel.com/api/about",
        headers: {
          Authorization:
            "Bearer Bearer 1|HuR0HBz5TKgU6MhVWcNzykbWcW923YasMMS31A5R",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  update: (data) => {
    axios
      .request({
        method: "put",
        maxBodyLength: Infinity,
        url: "https://test.rkcustomapparel.com/api/about",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
