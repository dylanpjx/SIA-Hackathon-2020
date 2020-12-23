import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';

import Headerbar from './components/Headerbar';
import BagTable from './components/BagTable';

// Sample data from API
function createData(bid, name, imgbefore, imgafter, dmgml, dmgpass, claim) {
  return {
    bid,
    name,
    imgbefore,
    imgafter,
    dmgml,
    dmgpass,
    claim,
  };
}

const rows = [
  createData(
    'cdaf5f0b-d2ec-46ec-aeb3-be2868c51a45',
    'Rachel Tan',
    '',
    '',
    ['Side - Dent'],
    ['Side - Dent'],
    'SIA',
  ),
  createData(
    'fa20268f-0d84-4104-97a7-15c146938f2b',
    'Chandler Bing',
    '',
    '',
    ['NA'],
    ['End - Crack'],
    'INS',
  ),
  createData(
    'c97ca833-69e8-4f7a-b335-34a6035fea34',
    'Barney Stinson',
    '',
    '',
    ['Top - Crack'],
    ['Top - Dent', 'Top - Crack'],
    'SIA',
  ),
  createData(
    'bf56f7b2-8256-4dd9-b1ba-1aa95337e3c1',
    'Art Vandelay',
    '',
    '',
    ['Top - Torn'],
    ['NA'],
    'NA',
  ),
  createData(
    'be134736-998f-4c4f-bd27-f24239663c26',
    'Chandler Bing',
    '',
    '',
    ['NA'],
    ['Wheels - Missing', 'End - Hole'],
    'INS',
  ),
  createData(
    'a40fce57-2db6-450c-9e74-f9baf19a559c',
    'Tan Ah Meng',
    '',
    '',
    ['End - Dent'],
    ['NA'],
    'NA',
  ),
];

const CLAIM_INS = 'INS';
const CLAIM_SIA = 'SIA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: rows,
      apiResponseFiltered: rows,
      filters: {
        claimFromIns: 0,
        claimFromSia: 0,
        isDamaged: 0,
      },
      searchMode: 0,
      searchTerm: '',
    };
  }

  // callAPI() {
  //   fetch('http://localhost:9000/testAPI')
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ ...this.state, apiResponse: res }));
  // }

  filterByTags = (datum, filters) => {
    return (
      filters.claimFromIns + filters.claimFromSia + filters.isDamaged === 0 ||
      (filters.claimFromIns === 1 && datum.claim === CLAIM_INS) ||
      (filters.claimFromSia === 1 && datum.claim === CLAIM_SIA) ||
      (filters.isDamaged === 1 && datum.dmgml[0] !== 'NA')
    );
  };

  filterByTerm = (datum, term) => {
    if (term.trim() === '') return true;

    term = term.toLowerCase();

    if (this.state.searchMode) {
      return datum.name.toLowerCase().includes(term);
    }

    return datum.bid.toLowerCase().includes(term);
  };

  updateSearch = (text) => {
    this.setState((prevState) => ({
      ...this.state,
      searchTerm: text,
      apiResponseFiltered: prevState.apiResponse
        .filter((datum) => this.filterByTags(datum, this.state.filters))
        .filter((datum) => this.filterByTerm(datum, text)),
    }));
  };

  switchMode = (mode) => {
    this.setState({
      ...this.state,
      searchMode: mode,
    });
  };

  toggleFilter = (filter) => {
    const filters = this.state.filters;
    filters[filter] = 1 - filters[filter];

    this.setState((prevState) => ({
      ...this.state,
      filters,
      apiResponseFiltered: prevState.apiResponse
        .filter((datum) => this.filterByTags(datum, filters))
        .filter((datum) => this.filterByTerm(datum, this.state.searchTerm)),
    }));
  };

  render() {
    return (
      <div>
        <Paper>
          <Headerbar
            searchMode={this.state.searchMode}
            updateSearch={this.updateSearch}
            switchMode={this.switchMode}
            filters={this.state.filters}
            toggleFilter={this.toggleFilter}
            filterData={this.filterData}
          />
          <BagTable tableData={this.state.apiResponseFiltered} />
        </Paper>
      </div>
    );
  }
}

export default App;
