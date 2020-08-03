/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      number
      name
      description
      status
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      number
      name
      description
      status
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      number
      name
      description
      status
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimeEntry = /* GraphQL */ `
  subscription OnCreateTimeEntry {
    onCreateTimeEntry {
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
        status
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeEntry = /* GraphQL */ `
  subscription OnUpdateTimeEntry {
    onUpdateTimeEntry {
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
        status
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeEntry = /* GraphQL */ `
  subscription OnDeleteTimeEntry {
    onDeleteTimeEntry {
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
        status
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInvoiceInfo = /* GraphQL */ `
  subscription OnCreateInvoiceInfo {
    onCreateInvoiceInfo {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInvoiceInfo = /* GraphQL */ `
  subscription OnUpdateInvoiceInfo {
    onUpdateInvoiceInfo {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInvoiceInfo = /* GraphQL */ `
  subscription OnDeleteInvoiceInfo {
    onDeleteInvoiceInfo {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
