import Layout from "../../Components/Layout";
import SummerCard from "../../Components/SummerCard";
import ProductCard from "../../Components/ProductCard/index";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

import encantoMediterraneo from "../../../public/cardsBanners/BANNER-HOME-ENCANTO-MEDITERRANEO-LG.jpg";

function Home() {
  const oldCollection = [
    {
      title: "",
      img: "/public/cardsBanners/COLOR-ROMANCE - BANNER-HOME-SM.jpg",
    },
    {
      title: "",
      img: "./studio-f/public/cardsBanners/BANNER-HOME-STF-SUMMER-2023-MUMBAI-VIBES-SM.jpg",
    },
    {
      title: "",
      img: "./public/cardsBanners/BANNER-HOME-Y2K-FEVER-SM.jpg",
    },
  ];

  const summerCollection = [
    {
      image: "cardsBanners/BLUSAS-ABR-23.jpg",
      title: "BLUSAS",
    },
    {
      image: "cardsBanners/PANTALONES-ABR-23.jpg",
      title: "PANTALONES",
    },
    {
      image: "cardsBanners/VESTIDOS-ABR-23.jpg",
      title: "VESTIDOS",
    },
    {
      image: "cardsBanners/BOLSOS-ABR-23.jpg",
      title: "BOLSOS",
    },
  ];

  const products = [
    {
      img: "/studio-f/public/products/_stfco_producto_Bolsosycarteras_BLANCO_S402293_1.jpg",
      state: "NUEVO",
      title: "BOLSO DE HOMBRO CON CADENA Y FF FRONTAL",
      price: "$298.900",
    },
    {
      img: "/studio-f/public/products/_stfco_producto_Camisasyblusas_NATURAL_S173243_1.jpg",
      state: "NUEVO",
      title: "BLUSA MANGA 3/4 CON PASAMANERIA",
      price: "$289.900",
    },
    {
      img: "/studio-f/public/products/_stfco_producto_Camisasyblusas_NATURAL_S173561_2.jpg",
      state: "NUEVO",
      title: "BLUSA CUELLO ALTO Y MANGA LARGA CON CRUCE",
      price: "$189.900",
    },
    {
      img: "/studio-f/public/products/_stfco_producto_Camisasyblusas_ROJOPRADA_S173896A_1.jpg",
      state: "NUEVO",
      title: "BLUSA SISA CUELLO ALTO CON BROCHES",
      price: "$159.900",
    },
    {
      img: "/studio-f/public/products/_stfco_producto_Enterizosconjuntos_VERDESELVA_S052390_1.jpg",
      state: "NUEVO",
      title: "CONJUNTO SHORT Y BLUSA CAMISERA",
      price: "$329.900",
    },
  ];

  return (
    <Layout>
      <div className="w-100 h-2/4">
        <Link to="/products">
          <img
            src={encantoMediterraneo}
            alt="Encanto collection photo"
            className="w-full h-full"
          />
        </Link>
      </div>
      <div className=" flex w-full justify-between items-center m-4 h-14 bg-black text-sm text-white">
        <p>COMPRA SEGURA | WWW.STUDIOF.COM.CO</p>
        <p>ENVÍO GRATIS POR COMPRAS IGUALES O SUPERIORES A $150.000</p>
        <p>ARTISAN SUMMER | SUMMER 2023 - STUDIO F</p>
        <p>IPANEMA | SUMMER 2023 - STUDIO F</p>
      </div>
      <div className="w-full flex justify-between p-3">
        {summerCollection.map((product, index) => {
          return (
            <SummerCard
              key={index}
              img={product.image}
              title={product.title}
              active={true}
            />
          );
        })}
      </div>
      <div className="w-full mt-16">
        <div className="w-full mb-10  flex items-center justify-between pl-12 pr-12">
          <div className="w-96 border h-px border-gray-300"></div>
          <h1 className="w-auto text-4xl font-montserrat font-bold">
            NUEVA COLLECIÓN
          </h1>
          <div className="w-96 border h-px border-gray-300"></div>
        </div>
        <div className="w-full">
          <Link to="/products" className="flex justify-between">
            {products.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={product.img}
                  state={product.state}
                  title={product.title}
                  price={product.price}
                  active={false}
                />
              );
            })}
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-between mt-14 pl-24 pr-24">
        {oldCollection.map((product, index) => {
          return (
            <SummerCard key={index} img={product.img} title={product.title} />
          );
        })}
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
