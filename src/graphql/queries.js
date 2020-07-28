/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTimeEntry = /* GraphQL */ `
  query GetTimeEntry($id: ID!) {
    getTimeEntry(id: $id) {
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
export const listTimeEntrys = /* GraphQL */ `
  query ListTimeEntrys(
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvoiceInfo = /* GraphQL */ `
  query GetInvoiceInfo($id: ID!) {
    getInvoiceInfo(id: $id) {
      key
      width
      height
      entryID
      createdAt
      updatedAt
    }
  }
`;
export const listInvoiceInfos = /* GraphQL */ `
  query ListInvoiceInfos(
    $filter: ModelInvoiceInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        key
        width
        height
        entryID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectByNumber = /* GraphQL */ `
  query ProjectByNumber(
    $number: String
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectByNumber(
      number: $number
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const entriesByProject = /* GraphQL */ `
  query EntriesByProject(
    $projectID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EntriesByProject(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const entriesByDate = /* GraphQL */ `
  query EntriesByDate(
    $date: AWSDate
    $sortDirection: ModelSortDirection
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EntriesByDate(
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const entriesByUser = /* GraphQL */ `
  query EntriesByUser(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EntriesByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const entriesByUserByDate = /* GraphQL */ `
  query EntriesByUserByDate(
    $owner: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EntriesByUserByDate(
      owner: $owner
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
