const fakeData: fakeDataType[] = [
  {
    image: "../../../assets/ac-cover.jpg",
    tag: "DIGITAL",
    price: "149,99",
    media: "DIGITAL | PS4"
  },
  {
    image: "../../../assets/bt-1.jpg",
    tag: "DIGITAL",
    price: "139,99",
    media: "DIGITAL | PS4"
  },
  {
    image: "../../../assets/bt-4.jpg",
    tag: "DIGITAL",
    price: "134,99",
    media: "DIGITAL | PS4"
  },
  {
    image: "../../../assets/bt-5.jpg",
    tag: "DIGITAL",
    price: "159,99",
    media: "DIGITAL | PS4, PS5"
  },
  {
    image: "../../../assets/bt-bad-company-2.jpg",
    tag: "DIGITAL",
    price: "129,99",
    media: "DIGITAL | PS4"
  },
  {
    image: "../../../assets/bt-hardline.jpg",
    tag: "DIGITAL",
    price: "139,99",
    media: "DIGITAL | PS4"
  },
  {
    image: "../../../assets/sekiro.png",
    tag: "GAME OF THE YEAR",
    price: "179,99",
    media: "DIGITAL | PS4, PS5"
  },
  {
    image: "../../../assets/tlou.png",
    tag: "EXCLUSIVE",
    price: "59,99",
    media: "DIGITAL | PS4, PS5"
  }
]

export type fakeDataType = {
  image: string,
  tag: string,
  price: string,
  media: string
}

export default fakeData;
