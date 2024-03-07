import { Component } from "react";
import { getRandomColor } from "../../utils/color";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      itemsColor: this.props.list.map(() => getRandomColor()), // Доп таска
    };

    setTimeout(() => {
      this.setState({
        list: [...this.state.list, "Kyiv"],
        color: "lightpink",
        itemsColor: [...this.state.itemsColor, getRandomColor()], // Доп таска
      });
    }, 1000);

    // Доп таска
    setTimeout(() => {
      this.setState({
        list: [...this.state.list].sort(),
        itemsColor: this.state.list.map(() => getRandomColor()),
      });
    }, 3000);

    // Я думал для сортировки сделать this.state.list.sort(), но предполагаю что так делать нельзя потому что sort мутабелен и изменяет массив на прямую по ссылке?
    // Тем самым мы нарушаем правило прямого вмешательства в State?

    // Насчет списка и рандомных цветов для них, для упрощения я хотел видоизменить входящие данные - приходит массив -> сделать массив обьектов [{city: '', itemColor: ''}...]
    // Но в данном случае особо не увидел причин для видоизменения входящих данных)
  }

  render() {
    const { list = [], color, itemsColor = [] } = this.state;

    return list.length ? (
      <ul style={{ backgroundColor: color }}>
        {list.map((item, index) => (
          <li key={index} style={{ backgroundColor: itemsColor[index] }}>
            {item}
          </li>
        ))}
      </ul>
    ) : null;
  }
}
