import { Component } from 'react';
import './styles.css';

const initialState = {
  First: false,
  Second: false,
  Third: false,
};

export class AcordionList extends Component {
  state = initialState;

  openText = () => {
    this.setState({ First: true, Second: true, Third: true });
  };

  closeText = () => {
    this.setState(initialState);
  };
  checkingItem = event => {
    const elem = event.target.textContent.split(' ')[0];
    this.setState(prevState => ({ [elem]: !prevState[elem] }));
  };

  render() {
    const { First, Second, Third } = this.state;
    return (
      <div className="container">
        <div className="accordion">
          <h1>FAQ</h1>
          <button
            type="button"
            className="btn"
            id="expand-all"
            onClick={this.openText}
          >
            Expand All
          </button>
          <button
            type="button"
            className="btn"
            id="collapse-all"
            onClick={this.closeText}
          >
            Collapse All
          </button>
          <div className="accordion-item">
            <p className="title" onClick={this.checkingItem}>
              First Question
            </p>
            {First && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <p className="title" onClick={this.checkingItem}>
              Second Question
            </p>
            {Second && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <p className="title" onClick={this.checkingItem}>
              Third Question
            </p>
            {Third && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
