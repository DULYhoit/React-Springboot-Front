import { Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";
const Notice = () => {
  //페이지네이션에 필요한 상태

  //게시물 페이징 알고리즘
  //현재페이지 첫번째게시물index ex)게시물을 10개씩 뿌린다고가정했을때 2페이지의 첫번째 게시물은 10번
  //몇개의 페이지가 표시되야하나 : 올림(총게시물/표시할게시물)
  //게시물
  let [posts, setPosts] = useState([]);
  //몇개의게시물을표시
  let [limit, setLimit] = useState(10);
  //현재페이지
  let [page, setPage] = useState(1);
  //총게시물
  let total = posts.length;
  //계산
  let offset = (page - 1) * limit;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);
  return (
    <div className="notice-container">
      <h1>샘플게시판</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
            <th>댓글수</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(offset, offset + limit).map(({ id, title, body }) => {
            return (
              <tr>
                <td>{id}</td>
                <td>
                  <Link to={"/detail"} style={{ textDecoration: "none" }}>
                    <span className="notice-span">{title}</span>
                  </Link>
                </td>
                <td>admin</td>
                <td>2013.05.12</td>
                <td>2</td>
                <td>0</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        total={total}
        limit={limit}
        page={page}
        setPage={setPage}
      ></Pagination>
    </div>
  );
};

export default Notice;
