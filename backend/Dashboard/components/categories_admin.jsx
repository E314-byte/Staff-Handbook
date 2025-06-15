import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/adminPanel.scss";

function categories_admin({ URL }) {
  const src = "http://localhost:8080/api/categories/";
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setCategories(data.data);
      console.log(data.data);
    });
  }, []);

  // для изменения данных о пользовате
  const [categories_id_Updata, setCategories_id_Updata] = useState("");
  const [name_Updata, setName_Updata] = useState("");
  const [description_Updata, setDescription_Updata] = useState("");
  const [massageCategoriesUpdata, setMassageCategoriesUpdata] = useState("");

  const UpdataCategories = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/categories", {
        name_Updata,
        description_Updata,
        categories_id_Updata,
      });
      setMassageCategoriesUpdata("Данные категории изменены");
      console.log("Данные категории изменены");
    } catch (error) {
      setMassageCategoriesUpdata("Не получилось изменить данные категории");
      console.log("Не получилось изменить данные категории", error);
    }
  };

  // для удаления
  const [isDeleting, setIsDeleting] = useState(0);
  const [massageIsDeleting, setMassageIsDeleting] = useState("");

  const DeleteCategories = async (categories_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/categories/${categories_id}/`
      );
      setMassageIsDeleting("Категория удалена");
      console.log("Категория удалена");
    } catch (error) {
      setMassageIsDeleting("Категория не удалена");
      console.log("Категория не удалена", error);
    }
  };

  // Создание пользователя
  const [name_CreateCategories, setName_CreateCategories] = useState("");
  const [description_CreateCategories, setDescription_CreateCategories] =
    useState("");
  const [massageCreateCategories, setMassageCreateCategories] = useState("");

  const CreateCategories = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/categories",
        {
          name_CreateCategories,
          description_CreateCategories,
        }
      );
      setMassageCreateCategories("Категория создана");
      console.log("Категория создана");
    } catch (error) {
      setMassageCreateCategories("Не получилось создать категорию");
      console.log("Не получилось создать категорию", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1 className="h1_adminPanel">Админ панель</h1>
          <ul>
            <li>
              <Link to="/admin/user_admin">
                <div className="admin_panel_items">Пользователь</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/categories_admin">
                <div className="admin_panel_items">Категории тестов</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/test_admin">
                <div className="admin_panel_items">Тесты</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/question_admin">
                <div className="admin_panel_items">Вопросы</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/answer_admin">
                <div className="admin_panel_items">Ответы</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="table_user_admin">
          <h1>Управление данными категорий</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Categories.map((item) => (
                <tr key={item.categories_id}>
                  <td>{item.categories_id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="reques_fun_queries_database">
          <div className="fun">
            {/* <br /> */}
            <div className="input_parameters">
              <h1>Изменения данных категории</h1>

              <label className="label">
                ID Категории
                <span style={{ color: "red" }}>(нельзя изменять)</span>
                <input
                  type="text"
                  placeholder="ID Категории"
                  value={categories_id_Updata}
                  onChange={(e) => setCategories_id_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Имя категории
                <input
                  type="text"
                  placeholder="Имя категории"
                  value={name_Updata}
                  onChange={(e) => setName_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Описание
                <input
                  type="text"
                  placeholder="Описание"
                  value={description_Updata}
                  onChange={(e) => setDescription_Updata(e.target.value)}
                ></input>
              </label>
              {/* <label className="label">
                Пароль
                <input
                  type="password"
                  placeholder="пароль"
                  value={password_hash_Updata}
                  onChange={(e) => setPassword_hash_Updata(e.target.value)}
                ></input>
              </label> */}
              <button className="btn_submit_admin" onClick={UpdataCategories}>
                изменить категорию
              </button>
              <p>{massageCategoriesUpdata}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Удаление категории</h1>
            {/* <br /> */}
            <div className="input_parameters">
              <label className="label">
                ID категории
                <input
                  type="text"
                  placeholder="ID категории"
                  value={isDeleting}
                  onChange={(e) => setIsDeleting(e.target.value)}
                ></input>
              </label>
              <button
                className="btn_submit_admin"
                onClick={() => DeleteCategories(isDeleting)}
              >
                удалить категорию
              </button>
              <p>{massageIsDeleting}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Создание категории</h1>
            {/* <br /> */}
            <div className="input_parameters">
              <label className="label">
                Имя категории
                <input
                  type="text"
                  placeholder="Имя категории"
                  value={name_CreateCategories}
                  onChange={(e) => setName_CreateCategories(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Описание
                <input
                  type="text"
                  placeholder="Описание"
                  value={description_CreateCategories}
                  onChange={(e) =>
                    setDescription_CreateCategories(e.target.value)
                  }
                ></input>
              </label>
              {/* <label className="label">
                Пароль
                <input
                  type="password"
                  placeholder="пароль"
                  value={password_hash1}
                  onChange={(e) => setPassword_hash1(e.target.value)}
                ></input>
              </label> */}
              <button className="btn_submit_admin" onClick={CreateCategories}>
                создать категорию
              </button>
              <p>{massageCreateCategories}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default categories_admin;
