import React, { Component } from 'react';

import WeaveTDisabledElem from '../WeaveTDisabledElem';
import WeaveTEnabledElem from '../WeaveTEnabledElem';

import './style.css';
import '../../../styles/index.css';

class WeaveT extends Component {
  constructor() {
    super();
    this.indents = [];
    this.style = {};
  }

  render() {
    const {currentState} = this.props;

    if (this.indents.length === 0) {
      const elementSize = parseInt(currentState.settings.elementSize, 10);

      this.style = {
        width: (currentState.settings.ro * elementSize) + 2,
        height: (currentState.settings.ry * elementSize) + 2
      };
      this.generateIndents();
    } else {
      this.applyThreadingsDiff();
      this.applyTreadlingsDiff();
      this.applyTieUpDiff();
      this.applySettingsDiff();
    }

    return (
      <div className='Weave' style={this.style}>
        {this.indents}
      </div>
    );
  }

  applyThreadingsDiff() {
    if (this.props.currentState.diff.threadings) {
      const { col, row } = this.props.currentState.diff.threadings;

      if (row === undefined) {
        const colIndents = [];

        for (let j = 0; j < this.props.currentState.settings.ry; j++) {
          colIndents.push(<WeaveTDisabledElem key={j} col={col} row={j} />);
        }

        this.indents[col] = (
          <div className='column' key={col}>
            {colIndents}
          </div>
        );
      } else {
        const colIndents = [];

        for (let j = 0; j < this.props.currentState.settings.ry; j++) {
          const elem = this.componentState(col, j)
            ? <WeaveTEnabledElem key={j} col={col} row={j} />
            : <WeaveTDisabledElem key={j} col={col} row={j} />;

          colIndents.push(elem);
        }

        this.indents[col] = (
          <div className='column' key={col}>
            {colIndents}
          </div>
        );
      }
    }
  }

  applyTreadlingsDiff() {
    if (this.props.currentState.diff.treadlings) {
      const { col, row } = this.props.currentState.diff.treadlings;

      if (row === undefined) {
        for (let i = 0; i < this.indents.length; i++) {
          this.indents[i].props.children[col] = <WeaveTDisabledElem
                                                  key={col}
                                                  col={row}
                                                  row={col}
                                                />;
        }
      } else {
        for (let i = 0; i < this.indents.length; i++) {
          const elem = this.componentState(i, col)
            ? <WeaveTEnabledElem key={col} col={i} row={col} />
            : <WeaveTDisabledElem key={col} col={i} row={col} />;

          this.indents[i].props.children[col] = elem;
        }
      }
    }
  }

  applyTieUpDiff() {
    if (this.props.currentState.diff.tieUp) {
      const { col, row, flag } = this.props.currentState.diff.tieUp;
      const threadings = [];
      const treadlings = [];

      for (let i = 0; i < this.props.currentState.threadings.length; i++) {
        if (this.props.currentState.threadings[i] === row)
          threadings.push(i);
      }

      for (let i = 0; i < this.props.currentState.treadlings.length; i++) {
        if (this.props.currentState.treadlings[i] === col)
          treadlings.push(i);
      }

      for (let i = 0; i < threadings.length; i++) {
        let th = threadings[i];
        for (let ii = 0; ii < treadlings.length; ii++) {
          let tr = treadlings[ii];
          this.indents[th].props.children[tr] = flag
            ? <WeaveTEnabledElem key={tr} col={th} row={tr} />
            : <WeaveTDisabledElem key={tr} col={th} row={tr} />;
        }
      }
    }
  }

  applySettingsDiff() {
    // need refactoring!
    if (this.props.currentState.diff.settings) {
      let { ro, ry, elementSize } = this.props.currentState.settings;
      elementSize = parseInt(elementSize, 10);
      ro = parseInt(ro, 10);
      ry = parseInt(ry, 10);

      this.style = {
        width: (ro * elementSize) + 2,
        height: (ry * elementSize) + 2
      };

      if (this.indents.length < ro) {
        for (let i = this.indents.length; i < ro; i++) {
          const colIndents = [];

          for (let j = 0; j < ry; j++) {
            const elem = this.componentState(i, j)
              ? <WeaveTEnabledElem key={j} col={i} row={j} />
              : <WeaveTDisabledElem key={j} col={i} row={j} />;

            colIndents.push(elem);
          }

          this.indents.push(
            <div className='column' key={i}>
              {colIndents}
            </div>
          );
        }
      } else if (this.indents.length > ro) {
        this.indents = this.indents.slice(0, ro)
      }

      if (this.indents[0].props.children.length < ry) {
        for (let i = 0; i < this.indents.length; i++) {
          for (let j = this.indents[i].props.children.length; j < ry; j++) {
            const elem = this.componentState(i, j)
              ? <WeaveTEnabledElem key={j} col={i} row={j} />
              : <WeaveTDisabledElem key={j} col={i} row={j} />;

            this.indents[i].props.children.push(elem);
          }
        }
      } else if (this.indents[0].props.children.length > ry) {
        for (let i = 0; i < this.indents.length; i++) {
          for (let j = this.indents[i].props.children.length; j > ry; j--) {
            this.indents[i].props.children.pop();
          }
        }
      }
    }
  }

  getThreadingNumber(col) {
    const {currentState} = this.props;
    const threadingState = currentState.threadings;

    return (typeof threadingState[col] === 'number' )
      ? threadingState[col]
      : -1;
  }

  getTreadlingNumber(row) {
    const {currentState} = this.props;
    const treadlingState = currentState.treadlings;

    return (typeof treadlingState[row] === 'number' )
      ? treadlingState[row]
      : -1;
  }

  getTieUpState(threadingNum, treadlingNum) {
    if (threadingNum === -1 || treadlingNum === -1) return false;
    const tieUpState = this.props.currentState.tieUp;

    return (tieUpState[threadingNum] && tieUpState[threadingNum][treadlingNum])
      ? true
      : false;
  }

  componentState(col, row) {
    return this.getTieUpState(this.getThreadingNumber(col), this.getTreadlingNumber(row));
  }

  generateIndents() {
    for (let i = 0; i < this.props.currentState.settings.ro; i++) {
      const colIndents = [];

      for (let j = 0; j < this.props.currentState.settings.ry; j++) {
        const elem = this.componentState(i, j)
          ? <WeaveTEnabledElem key={j} col={i} row={j} />
          : <WeaveTDisabledElem key={j} col={i} row={j} />;

        colIndents.push(elem);
      }

      this.indents.push(
        <div className='column' key={i}>
          {colIndents}
        </div>
      );
    }
  }
}

export default WeaveT;
