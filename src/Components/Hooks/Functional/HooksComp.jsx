import React, { useState } from "react";

const HooksComp = () => {
  const [jumlah, setJumlah] = useState(0);

  const tambahProduk = () => {
    setJumlah(jumlah + 1);
  };

  return (
    <div>
      <h1>{jumlah}</h1>
      <button onClick={tambahProduk}>Tambah Produk</button>
    </div>
  );
};

export default HooksComp;
