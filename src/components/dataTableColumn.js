const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    // sortable: true,
  },
  {
    name: "Project",
    selector: (row) => row.project,
    // sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    // sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row["start date"],
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    // sortable: true,
  },
  {
    name: "Responsible",
    selector: (row) => row.responsible,
    // sortable: true,
  },
  {
    name: "Savings Amount",
    selector: (row) => row.project,
    // sortable: true,
  },
  {
    name: "Currency",
    selector: (row) => row.currency,
    // sortable: true,
  },
  {
    name: "Complexity",
    selector: (row) => row.complexity,
    // sortable: true,
  },
  // {
  //   name: "Project",
  //   selector: (row) => row.project,
  //   // sortable: true,
  // },
];

export { columns };
