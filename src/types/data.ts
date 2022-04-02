interface JsonPayload {
    message: string;
    metadata: object;
}

interface Labels {
    project_id: string;
    instance_id: string;
    zone: string;
}

interface Resource {
    type: string;
    labels: Labels;
}

interface Data {
    insertId: string;
    timestamp: string;
    severity: string;
    logName: string;
    receiveTimestamp: string;
    jsonPayload: JsonPayload;
    resource: Resource;
}

export { Data };
