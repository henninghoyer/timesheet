/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      number
      name
      description
      entries {
        items {
          id
          owner
          duration
          date
          description
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      number
      name
      description
      entries {
        items {
          id
          owner
          duration
          date
          description
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      number
      name
      description
      entries {
        items {
          id
          owner
          duration
          date
          description
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createTimeEntry = /* GraphQL */ `
  mutation CreateTimeEntry(
    $input: CreateTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    createTimeEntry(input: $input, condition: $condition) {
      id
      owner
      duration
      date
      description
      invoice {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      invoiceThumbnail {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      projectID
      project {
        id
        number
        name
        description
        entries {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeEntry = /* GraphQL */ `
  mutation UpdateTimeEntry(
    $input: UpdateTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    updateTimeEntry(input: $input, condition: $condition) {
      id
      owner
      duration
      date
      description
      invoice {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      invoiceThumbnail {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      projectID
      project {
        id
        number
        name
        description
        entries {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeEntry = /* GraphQL */ `
  mutation DeleteTimeEntry(
    $input: DeleteTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    deleteTimeEntry(input: $input, condition: $condition) {
      id
      owner
      duration
      date
      description
      invoice {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      invoiceThumbnail {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      projectID
      project {
        id
        number
        name
        description
        entries {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInvoiceInfo = /* GraphQL */ `
  mutation CreateInvoiceInfo(
    $input: CreateInvoiceInfoInput!
    $condition: ModelInvoiceInfoConditionInput
  ) {
    createInvoiceInfo(input: $input, condition: $condition) {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
export const updateInvoiceInfo = /* GraphQL */ `
  mutation UpdateInvoiceInfo(
    $input: UpdateInvoiceInfoInput!
    $condition: ModelInvoiceInfoConditionInput
  ) {
    updateInvoiceInfo(input: $input, condition: $condition) {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvoiceInfo = /* GraphQL */ `
  mutation DeleteInvoiceInfo(
    $input: DeleteInvoiceInfoInput!
    $condition: ModelInvoiceInfoConditionInput
  ) {
    deleteInvoiceInfo(input: $input, condition: $condition) {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
