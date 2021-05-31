import React, { useEffect, useState } from "react";
import { Container, Alert, NavLink, Button, Table, Link } from "reactstrap";
import axios from "axios";

const api = "http://localhost:3001";

function HooksUseEffects() {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    console.log("Memanggil use effect");
    axios.get(api + "/tampil").then((res) => {
      setMahasiswa(res.data.values);
    });
  }, []);

  return (
    <Container>
      <h2>Data Mahasiswa</h2>

      <hr />
      <Table className="table-bordered">
        <thead>
          <th>NIM</th>
          <th>Nama</th>
          <th>Jurusan</th>
          <th>Aksi</th>
        </thead>
        <tbody>
          {mahasiswa.map((mahasiswa) => (
            <tr key={mahasiswa.id_mahasiswa}>
              <td>{mahasiswa.nim}</td>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>
                <Button color="success">Edit</Button>
                <span> </span>
                <Button color="danger">Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default HooksUseEffects;
