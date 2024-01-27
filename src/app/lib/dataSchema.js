export class Trip {
    constructor(name, owner, permissions, description, where, to, id) {
      this.name = name;
      this.owner = owner; // Reference to User
      this.permissions = permissions || {}; // Permissions object (e.g., { read: [], write: [] })
      this.description = description;
      this.where = where;
      this.to = to;
      //this.id = id;
    }
  }