import { Component } from "react";
import "./styles.css";

const BASE_URL = "https://65ef5bb3ead08fa78a5055fb.mockapi.io/todos/";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      editing: null,
      editText: "",
    };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  async componentDidMount() {
    try {
      const request = await fetch(BASE_URL);
      const response = await request.json();

      this.setState({
        list: response,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async handleComplete(item) {
    try {
      const request = await fetch(BASE_URL + item.id, {
        method: "PUT",
        body: JSON.stringify({ ...item, completed: !item.completed }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await request.json();

      this.setState((actualState) => ({
        list: actualState.list.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async handleDelete(id) {
    try {
      const request = await fetch(BASE_URL + id, {
        method: "DELETE",
      });
      const response = await request.json();

      this.setState((actualState) => ({
        list: actualState.list.filter((item) => item.id !== response.id),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmitEdit() {
    const item = this.state.list.find((item) => item.id === this.state.editing);

    const request = await fetch(BASE_URL + item.id, {
      method: "PUT",
      body: JSON.stringify({ ...item, title: this.state.editText }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await request.json();

    this.setState((actualState) => ({
      list: actualState.list.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      }),
      editing: null,
      editText: "",
    }));
  }

  handleToEdit(item) {
    this.setState({ editing: item.id, editText: item.title });
  }

  handleEditing(e) {
    this.setState({ editText: e.target.value });
  }

  render() {
    const { list, editing, editText } = this.state;

    return list.length ? (
      <table>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td onClick={() => this.handleToEdit(item)}>
                {editing === item.id ? (
                  <input type="text" value={editText} onChange={this.handleEditing} />
                ) : (
                  <span className={item.completed ? "completed" : null}>{item.title}</span>
                )}
              </td>

              <td>
                <input
                  type="checkbox"
                  onChange={() => this.handleComplete(item)}
                  checked={item.completed}
                  disabled={editing === item.id}
                />
              </td>

              <td>
                {editing === item.id ? (
                  <button className="submit" onClick={this.handleSubmitEdit}>
                    Submit
                  </button>
                ) : (
                  <button className="delete" onClick={() => this.handleDelete(item.id)}>
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}
