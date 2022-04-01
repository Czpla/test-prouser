declare namespace data {
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
        labes: Labels;
    }

    interface Data {
        insertId: string;
        timestamp: string;
        severity: string;
        logName: string;
        jsonPayload: JsonPayload;
        resource: Resource;
    }
}

declare var data: data.Data;

export = data;

export as namespace data;
