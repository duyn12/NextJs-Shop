/* eslint-disable @next/next/no-img-element */
export default function HomeContainer() {
    const imagespotLight = [
      "https://storage-asset.msi.com/global/picture/banner/banner_170445163774a272972e56c403d9e3c314dd97a0df.jpeg",
      "https://storage-asset.msi.com/global/picture/banner/banner_1695693289ebeb1f0bb341626b2d0bf870d3cb9254.jpeg",
      "https://storage-asset.msi.com/global/picture/banner/banner_170445142354207818e5028f0c1f969f8e17c9fbac.jpeg",
    ];
    const imageDescriptions = [
      {
        title: "Handhelds",
        description: "Grip and Game",
      },
      {
        title: "Card Đồ họa",
        description: "GeForce RTX™ 4090 SUPRIM X 24G",
      },
      {
        title: "Thiết bị Gaming",
        description: "Sản phẩm hoàn hảo dành cho bạn",
      },

    ];
    return (
      <div className="container my-8">
        <h2 className="flex justify-center mb-12 text-primary font-bold text-4xl">
          Discover the Latest MSI Innovations
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {imagespotLight.map((imgspotLight, index) => (
            <div className="transition hover:bg-transparent" key={index}>
              <a href="#" >
                <div className="overflow-hidden ">
                  <img
                    src={imgspotLight}
                    width="1040"
                    height="490"
                    alt=""
                    className=" transition hover:scale-125"
                  />
                </div>
                <div className="text-center my-4">
                  <h3 className="text-xl font-bold">{imageDescriptions[index].title}</h3>
                  <p className="text-sm">{imageDescriptions[index].description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  