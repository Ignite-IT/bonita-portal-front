
export class Process{
    public id;
    public name;
    public displayName;
    public version;
    public last_update_date;
    public activationState;
}

export class Case{
    public id;
    public name;
    public processDefinitionId: Process;
    public start;
    public started_by;
}

export class Task{
    public id;
    public name;
    public displayName;
    public assigned_id;
    public executedBy;
    public processId;
    public caseId;
    public priority;
    public state;
    public type;
}

export class Form{
    public id;
    public url;
}