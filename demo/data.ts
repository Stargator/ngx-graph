export function generateHierarchialGraph() {
  const nodes = [{
    id: 'start',
    label: 'start'
  }, {
    id: '1',
    label: 'Query ThreatConnect',
    rank: 'first'
  }, {
    id: '2',
    label: 'Query XForce',
    rank: 'first'
  }, {
    id: '3',
    label: 'Format Results'
  }, {
    id: '4',
    label: 'Search Splunk'
  }, {
    id: '5',
    label: 'Block LDAP'
  }, {
    id: '6',
    label: 'Email Results'
  }];

  const links = [{
    source: 'start',
    target: '1'
  }, {
    source: 'start',
    target: '2'
  }, {
    source: '1',
    target: '3'
  }, {
    source: '2',
    target: '4'
  }, {
    source: '2',
    target: '6'
  }, {
    source: '3',
    target: '5'
  }];

  return { links, nodes };
}
