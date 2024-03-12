import { Component } from "react";
import "./style.css";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: Array.isArray(props.list) ? props.list.map((item, id) => ({ ...item, id, active: false })) : [],
      activeCount: 0,
      tableStyles: null,
      interval: null,
    };
  }

  getRandomInactiveId() {
    const inactiveIds = this.state.list.filter((item) => !item.active).map((item) => item.id);
    return inactiveIds.length ? inactiveIds[Math.floor(Math.random() * inactiveIds.length)] : null;
  }

  setActiveListItem(id) {
    this.setState(
      (actualState) => ({
        list: actualState.list.map((item) => (item.id === id ? { ...item, active: true } : item)),
        activeCount: actualState.activeCount + 1,
      }),
      () => {
        if (Math.round(this.state.list.length / 2) === this.state.activeCount) {
          this.setBorderWhenHalfActive();
        }
        if (this.state.activeCount === this.state.list.length) {
          this.endOfInterval();
        }
      }
    );
  }

  setBorderWhenHalfActive() {
    this.setState(() => ({
      tableStyles: { borderWidth: "10px" },
    }));
  }

  endOfInterval() {
    clearInterval(this.state.interval);

    this.setState(() => ({
      tableStyles: { borderWidth: "20px" },
    }));
  }

  componentDidMount() {
    this.setState(() => ({
      interval: setInterval(() => {
        const id = this.getRandomInactiveId();

        if (id !== null) {
          this.setActiveListItem(id);
        } else {
          this.endOfInterval();
        }
      }, 2000),
    }));
  }

  render() {
    const { list, tableStyles } = this.state;

    return list.length ? (
      <table style={tableStyles}>
        <tbody>
          {list.map((item, id) => (
            <tr key={id} className={item.active ? "active" : null}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}
