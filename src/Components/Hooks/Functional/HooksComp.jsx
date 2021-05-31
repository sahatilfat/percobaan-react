import React, { useState } from "react";
import TambahComp from "../../Class/TambahComp";
import TampilComp from "./TampilComp";

const HooksComp = () => {
  const [jumlah, tambahJumlah] = useState(0);

  const tambahBilangan = () => {
    tambahJumlah(jumlah + 1);
  };

  // login
  const [dataLogin, setDataLogin] = useState({
    username: "firda",
    token: "123abcd",
    isLogin: true,
  });

  // cek kondisi sudah login / belum
  let tampil;

  if (dataLogin.isLogin) {
    tampil = (
      <TampilComp
        username={dataLogin.username}
        fungsi={tambahBilangan}
        jumlah={jumlah}
      />
    );
  } else {
    tampil = <TampilComp username="maaf anda belum login" disabled={true} />;
  }

  return <div>{tampil}</div>;
};

export default HooksComp;
