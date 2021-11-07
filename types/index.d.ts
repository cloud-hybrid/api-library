export namespace Library {
    const Compression: any;
    const Application: any;
    const Database: {
        NotAcceptedFields: any;
        ServerHeartbeatStartedEvent: any;
        MongoClientOptions: any;
        ExplainVerbosityLike: string | boolean;
        ChangeStream: any;
        ConnectionPoolCreatedEvent: any;
        OneOrMore: any;
        MongoClient: any;
        CreateIndexesOptions: any;
        StreamDescription: any;
        InferIdType: any;
        FilterOperations: any;
        ObjectID: any;
        AutoEncryptionOptions: any;
        Filter: any;
        MapReduceOptions: any;
        MongoInvalidArgumentError: any;
        ConnectionReadyEvent: any;
        ConnectionPoolClearedEvent: any;
        AnyBulkWriteOperation: {
            insertOne: any;
        } | {
            replaceOne: any;
        } | {
            updateOne: any;
        } | {
            updateMany: any;
        } | {
            deleteOne: any;
        } | {
            deleteMany: any;
        };
        RenameOptions: any;
        MapFunction: (this: any) => void;
        ConnectionOptions: any;
        DriverInfo: any;
        ServerDescription: any;
        MongoTransactionError: any;
        InsertOneModel: any;
        ServerApiVersion: Readonly<{
            readonly v1: "1";
        }>;
        HedgeOptions: any;
        ServerType: Readonly<{
            readonly Standalone: "Standalone";
            readonly Mongos: "Mongos";
            readonly PossiblePrimary: "PossiblePrimary";
            readonly RSPrimary: "RSPrimary";
            readonly RSSecondary: "RSSecondary";
            readonly RSArbiter: "RSArbiter";
            readonly RSOther: "RSOther";
            readonly RSGhost: "RSGhost";
            readonly Unknown: "Unknown";
            readonly LoadBalancer: "LoadBalancer";
        }>;
        BatchType: Readonly<{
            readonly INSERT: 1;
            readonly UPDATE: 2;
            readonly DELETE: 3;
        }>;
        ListCollectionsCursor: any;
        Projection: Document;
        BulkResult: any;
        ConnectionPoolEvents: {
            connectionPoolCreated(event: any): void;
            connectionPoolClosed(event: any): void;
            connectionPoolCleared(event: any): void;
            connectionCreated(event: any): void;
            connectionReady(event: any): void;
            connectionClosed(event: any): void;
            connectionCheckOutStarted(event: any): void;
            connectionCheckOutFailed(event: any): void;
            connectionCheckedOut(event: any): void;
            connectionCheckedIn(event: any): void;
        } & Omit<any, "message" | "close">;
        ServerEvents: any;
        MongoServerClosedError: any;
        TopologyType: Readonly<{
            readonly Single: "Single";
            readonly ReplicaSetNoPrimary: "ReplicaSetNoPrimary";
            readonly ReplicaSetWithPrimary: "ReplicaSetWithPrimary";
            readonly Sharded: "Sharded";
            readonly Unknown: "Unknown";
            readonly LoadBalanced: "LoadBalanced";
        }>;
        CountOptions: any;
        WithoutId: any;
        ServerHeartbeatFailedEvent: any;
        ConnectionClosedEvent: any;
        MongoKerberosError: any;
        Auth: any;
        ConnectionPoolClosedEvent: any;
        MongoDecompressionError: any;
        CountDocumentsOptions: any;
        WriteConcern: any;
        ChangeStreamDocument: any;
        ErrorDescription: any;
        MongoParseError: any;
        ChangeStreamOptions: any;
        WiredTigerData: any;
        GenericListener: (...args: any[]) => void;
        DropCollectionOptions: any;
        ValidateCollectionOptions: any;
        ServerOpeningEvent: any;
        MongoCursorInUseError: any;
        GridFSChunk: any;
        BitwiseFilter: any;
        EnhancedOmit: any;
        ReadConcernLevel: Readonly<{
            readonly local: "local";
            readonly majority: "majority";
            readonly linearizable: "linearizable";
            readonly available: "available";
            readonly snapshot: "snapshot";
        }>;
        MongoCursorExhaustedError: any;
        ListIndexesOptions: any;
        SortDirection: "desc" | 1 | -1 | "asc" | "ascending" | "descending" | {
            $meta: string;
        };
        FindOneAndReplaceOptions: any;
        DbOptions: any;
        ConnectionPoolMonitoringEvent: any;
        InsertOneOptions: any;
        WriteConcernSettings: any;
        TopologyOptions: any;
        AbstractCursor: any;
        Condition: any;
        GridFSBucketReadStreamOptionsWithRevision: any;
        MatchKeysAndValues: any;
        ProfilingLevelOptions: any;
        InsertManyResult: any;
        TopologyDescriptionOptions: any;
        SelectServerOptions: any;
        ConnectionCheckOutFailedEvent: any;
        ReadPreferenceFromOptions: any;
        LEGAL_TLS_SOCKET_OPTIONS: readonly ["ALPNProtocols", "ca", "cert", "checkServerIdentity", "ciphers", "crl", "ecdhCurve", "key", "minDHSize", "passphrase", "pfx", "rejectUnauthorized", "secureContext", "secureProtocol", "servername", "session"];
        ReadConcernLike: any;
        TransactionOptions: any;
        EvalOptions: any;
        ListDatabasesResult: any;
        KeysOfOtherType: never;
        RegExpOrString: any;
        ClientSession: any;
        SupportedSocketOptions: any;
        Compressor: Readonly<{
            readonly none: 0;
            readonly snappy: 1;
            readonly zlib: 2;
        }>;
        GridFSBucketOptions: any;
        GridFSBucketReadStream: any;
        BulkWriteOptions: any;
        AnyError: any;
        ProjectionOperators: Document;
        ListCollectionsOptions: any;
        ServerCapabilities: any;
        LoggerOptions: any;
        AggregationCursorOptions: any;
        ListDatabasesOptions: any;
        MongoNetworkTimeoutError: any;
        GridFSFile: any;
        CommandStartedEvent: any;
        CreateCollectionOptions: any;
        MongoNetworkError: any;
        PullAllOperator: any;
        ModifyResult: any;
        MongoClientEvents: Pick<any, "error" | "close" | "timeout" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged" | "connectionPoolCreated" | "connectionPoolClosed" | "connectionCreated" | "connectionReady" | "connectionClosed" | "connectionCheckOutStarted" | "connectionCheckOutFailed" | "connectionCheckedOut" | "connectionCheckedIn" | "connectionPoolCleared"> & {
            open(mongoClient: any): void;
        };
        PipeOptions: any;
        RoleSpecification: any;
        WriteConcernErrorData: any;
        MongoRuntimeError: any;
        ReadPreference: any;
        CursorStreamOptions: any;
        DropIndexesOptions: any;
        UpdateStatement: any;
        Stream: any;
        ExplainOptions: any;
        TopologyVersion: any;
        AuthMechanismProperties: any;
        ReadPreferenceLike: any;
        BSONSymbol: any;
        BulkWriteResult: any;
        Decimal128: any;
        AutoEncrypter: any;
        UpdateOneModel: any;
        ArrayOperator: any;
        KeysOfAType: string;
        TimeSeriesCollectionOptions: any;
        Map: MapConstructor;
        WriteError: any;
        DistinctOptions: any;
        BSONSerializeOptions: any;
        AbstractCursorEvents: any;
        CollStats: any;
        UpdateResult: any;
        ReadPreferenceOptions: any;
        CloseOptions: any;
        NumericType: any;
        MonitorOptions: any;
        IntegerType: any;
        IsAny: any;
        InsertOneResult: any;
        ChangeStreamEvents: any;
        AddUserOptions: any;
        ConnectOptions: any;
        TopologyDescription: any;
        CollStatsOptions: any;
        ReplaceOptions: any;
        BSONRegExp: any;
        MONGO_CLIENT_EVENTS: readonly ["connectionPoolCreated", "connectionPoolClosed", "connectionCreated", "connectionReady", "connectionClosed", "connectionCheckOutStarted", "connectionCheckOutFailed", "connectionCheckedOut", "connectionCheckedIn", "connectionPoolCleared", ...("error" | "close" | "timeout" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged")[]];
        IndexInformationOptions: any;
        FilterOperators: any;
        TypedEventEmitter: any;
        GridFSBucketWriteStreamOptions: any;
        DeleteStatement: any;
        SetProfilingLevelOptions: any;
        EventEmitterWithState: any;
        Long: any;
        UpdateFilter: {
            $currentDate?: any;
            $inc?: any;
            $min?: any;
            $max?: any;
            $mul?: any;
            $rename?: Record<string, string>;
            $set?: any;
            $setOnInsert?: any;
            $unset?: any;
            $addToSet?: any;
            $pop?: any;
            $pull?: any;
            $push?: any;
            $pullAll?: any;
            $bit?: any;
        } & Document;
        MongoCredentials: any;
        GridFSBucket: any;
        TagSet: any;
        MongoChangeStreamError: any;
        AcceptedFields: any;
        DestroyOptions: any;
        FindOptions: any;
        FindOneAndDeleteOptions: any;
        ConnectionCreatedEvent: any;
        ServerDescriptionChangedEvent: any;
        IndexSpecification: string | [string, number | "text" | "2d" | "2dsphere" | "geoHaystack"] | [string, any][] | readonly (string | [string, number | "text" | "2d" | "2dsphere" | "geoHaystack"] | {
            [p: string]: any;
        } | [string, any][] | {
            [p: string]: any;
        }[])[] | {
            [p: string]: any;
        } | {
            [p: string]: any;
        }[];
        TopologyClosedEvent: any;
        MongoTopologyClosedError: any;
        ClientSessionOptions: any;
        Timestamp: any;
        ExplainVerbosity: Readonly<{
            readonly queryPlanner: "queryPlanner";
            readonly queryPlannerExtended: "queryPlannerExtended";
            readonly executionStats: "executionStats";
            readonly allPlansExecution: "allPlansExecution";
        }>;
        DeleteOneModel: any;
        Int32: any;
        ConnectionCheckedInEvent: any;
        MongoGridFSStreamError: any;
        ResumeOptions: any;
        MongoServerSelectionError: any;
        BSONTypeAlias: "string" | "symbol" | "undefined" | "object" | "long" | "decimal" | "date" | "null" | "double" | "array" | "binData" | "objectId" | "bool" | "regex" | "dbPointer" | "javascript" | "javascriptWithScope" | "int" | "timestamp" | "minKey" | "maxKey";
        MongoBatchReExecutionError: any;
        BulkOperationBase: any;
        ReadPreferenceLikeOptions: any;
        ReadConcern: any;
        AuthMechanism: Readonly<{
            readonly MONGODB_AWS: "MONGODB-AWS";
            readonly MONGODB_CR: "MONGODB-CR";
            readonly MONGODB_DEFAULT: "DEFAULT";
            readonly MONGODB_GSSAPI: "GSSAPI";
            readonly MONGODB_PLAIN: "PLAIN";
            readonly MONGODB_SCRAM_SHA1: "SCRAM-SHA-1";
            readonly MONGODB_SCRAM_SHA256: "SCRAM-SHA-256";
            readonly MONGODB_X509: "MONGODB-X509";
        }>;
        ReduceFunction: (key: any, values: any[]) => any;
        CancellationToken: any;
        LEGAL_TCP_SOCKET_OPTIONS: readonly ["family", "hints", "localAddress", "localPort", "lookup"];
        MongoExpiredSessionError: any;
        MongoError: any;
        GridFSBucketEvents: any;
        ResumeToken: unknown;
        MinKey: any;
        DbStatsOptions: any;
        TopologyOpeningEvent: any;
        Batch: any;
        MongoBulkWriteError: any;
        Transaction: any;
        ListIndexesCursor: any;
        ServerApi: any;
        SchemaMember: {
            [x: string]: any;
        } | {
            [p: string]: any;
        };
        Hint: string | Document;
        Logger: any;
        Collection: any;
        EventsDescription: any;
        ConnectionCheckedOutEvent: any;
        CompressorName: "none" | "zlib" | "snappy";
        ClusterTime: any;
        ServerOptions: any;
        AutoEncryptionLoggerLevel: Readonly<{
            readonly FatalError: 0;
            readonly Error: 1;
            readonly Warning: 2;
            readonly Info: 3;
            readonly Trace: 4;
        }>;
        IndexDirection: number | "text" | "2d" | "2dsphere" | "geoHaystack";
        OptionalId: any;
        UpdateDescription: any;
        UnorderedBulkOperation: any;
        CommonEvents: "removeListener" | "newListener";
        ReturnDocument: Readonly<{
            readonly BEFORE: "before";
            readonly AFTER: "after";
        }>;
        ServerSession: any;
        AlternativeType: any;
        Db: any;
        MongoSystemError: any;
        Flatten: any;
        DeleteResult: any;
        AddToSetOperators: any;
        StreamDescriptionOptions: any;
        CollectionInfo: any;
        CollectionOptions: any;
        MonitorEvents: any;
        AggregationCursor: any;
        GridFSBucketReadStreamOptions: any;
        DeleteOptions: any;
        MongoDriverError: any;
        MongoMissingCredentialsError: any;
        FindCursor: any;
        CollationOptions: any;
        Promise: any;
        PkFactory: any;
        ClientMetadataOptions: any;
        IndexDescription: any;
        FindOperators: any;
        CommandOperationOptions: any;
        SetFields: any;
        OrderedBulkOperation: any;
        RootFilterOperators: any;
        BulkWriteOperationError: any;
        MongoOptions: any;
        CursorCloseOptions: any;
        PullOperator: any;
        MongoGridFSChunkError: any;
        ClientSessionEvents: any;
        WithSessionCallback: (session: any) => void | Promise<any>;
        OperationOptions: any;
        ConnectionPoolOptions: any;
        Admin: any;
        SupportedTLSConnectionOptions: any;
        MongoCredentialsOptions: any;
        OperationTime: any;
        DeleteManyModel: any;
        WriteConcernOptions: any;
        SupportedTLSSocketOptions: any;
        BSONType: Readonly<{
            readonly double: 1;
            readonly string: 2;
            readonly object: 3;
            readonly array: 4;
            readonly binData: 5;
            readonly undefined: 6;
            readonly objectId: 7;
            readonly bool: 8;
            readonly date: 9;
            readonly null: 10;
            readonly regex: 11;
            readonly dbPointer: 12;
            readonly javascript: 13;
            readonly symbol: 14;
            readonly javascriptWithScope: 15;
            readonly int: 16;
            readonly timestamp: 17;
            readonly long: 18;
            readonly decimal: 19;
            readonly minKey: -1;
            readonly maxKey: 127;
        }>;
        AggregateOptions: any;
        ServerSessionId: any;
        ClientMetadata: any;
        MongoDBNamespace: any;
        Binary: any;
        WithTransactionCallback: (session: any) => Promise<any>;
        TopologyDescriptionChangedEvent: any;
        PushOperator: any;
        EndSessionOptions: any;
        EstimatedDocumentCountOptions: any;
        W: number | "majority";
        AbstractCursorOptions: any;
        ServerSelector: (topologyDescription: any, servers: any[]) => any[];
        DropDatabaseOptions: any;
        ConnectionEvents: any;
        DBRef: any;
        ReadPreferenceMode: Readonly<{
            readonly primary: "primary";
            readonly primaryPreferred: "primaryPreferred";
            readonly secondary: "secondary";
            readonly secondaryPreferred: "secondaryPreferred";
            readonly nearest: "nearest";
        }>;
        CommandFailedEvent: any;
        HostAddress: any;
        LoggerFunction: (message?: any, ...optionalParams: any[]) => void;
        MongoCompatibilityError: any;
        FindOneAndUpdateOptions: any;
        Double: any;
        WithId: any;
        MongoNetworkErrorOptions: any;
        RemoveUserOptions: any;
        GridFSBucketWriteStream: any;
        Code: any;
        MongoNotConnectedError: any;
        UpdateOptions: any;
        ConnectionCheckOutStartedEvent: any;
        ServerClosedEvent: any;
        UpdateManyModel: any;
        ProfilingLevel: Readonly<{
            readonly off: "off";
            readonly slowOnly: "slow_only";
            readonly all: "all";
        }>;
        SupportedNodeConnectionOptions: any;
        ReplaceOneModel: any;
        MongoWriteConcernError: any;
        RunCommandOptions: any;
        WriteConcernError: any;
        CURSOR_FLAGS: readonly ["tailable", "oplogReplay", "noCursorTimeout", "awaitData", "exhaust", "partial"];
        MongoAPIError: any;
        MaxKey: any;
        MongoMissingDependencyError: any;
        CursorFlag: "tailable" | "oplogReplay" | "noCursorTimeout" | "awaitData" | "exhaust" | "partial";
        CommandSucceededEvent: any;
        FinalizeFunction: (key: any, reducedValue: any) => any;
        Callback: (error?: any, result?: any) => void;
        ServerHeartbeatSucceededEvent: any;
        TopologyEvents: any;
        MongoServerError: any;
        OnlyFieldsOfType: Record<string, any>;
        LoggerLevel: Readonly<{
            readonly ERROR: "error";
            readonly WARN: "warn";
            readonly INFO: "info";
            readonly DEBUG: "debug";
            readonly error: "error";
            readonly warn: "warn";
            readonly info: "info";
            readonly debug: "debug";
        }>;
        Document: any;
        ObjectId: any;
        Sort: string | string[] | 1 | -1 | [string, any][] | {
            [p: string]: any;
        } | Map<string, any> | [string, "desc" | 1 | -1 | "asc" | "ascending" | "descending" | {
            $meta: string;
        }];
    };
    const Octokit: {
        Octokit: any;
        createNodeMiddleware: any;
        App: any;
        OAuthApp: any;
    };
    const Router: (options?: any) => any;
    const Axios: any;
    const API: any;
    const ORM: {
        Date: any;
        Aggregate: any;
        ClientSession: any;
        ValidatorProps: any;
        NumericTypes: any;
        Models: any;
        LeanDocumentOrArrayWithRawType: any;
        _LeanDocument: any;
        AnyKeys: any;
        version: string;
        AddToSetOperators: any;
        SchemaOptions: any;
        PopulatedDoc: any;
        models: any;
        plugin: (fn: (schema: any, opts?: any) => void, opts?: any) => any;
        InsertManyOptions: any;
        pathsToValidate: string | string[];
        ErrorHandlingMiddlewareFunction: (this: ThisType<any>, err: any, res: any, next: (err?: any) => void) => void;
        connect: (uri: string, options: any, callback: any) => void;
        CallbackError: any;
        ConnectionStates: NodeModule;
    };
}
/***
 *
 * @type {Express}
 *
 */
export const Application: any;
/***
 *
 * @type {(function(Object=): function(*=, *=, *): void)|*}
 *
 */
export const Compression: ((arg0: any | undefined) => (arg0: any) => void) | any;
/***
 *
 * @type {{NotAcceptedFields: NotAcceptedFields, ServerHeartbeatStartedEvent: ServerHeartbeatStartedEvent, MongoClientOptions: MongoClientOptions, ExplainVerbosityLike: string | boolean, ChangeStream: ChangeStream, ConnectionPoolCreatedEvent: ConnectionPoolCreatedEvent, OneOrMore: ReadonlyArray<T> | T, MongoClient: MongoClient, CreateIndexesOptions: CreateIndexesOptions, StreamDescription: StreamDescription, InferIdType: TSchema extends {_id: infer IdType} ? ({} extends infer IdType ? Exclude<IdType, {}> : (unknown extends infer IdType ? ObjectId : IdType)) : ObjectId, FilterOperations: T extends Record<string, any> ? {[key in keyof T]?: FilterOperators<T[key]>} : FilterOperators<T>, ObjectID: ObjectId, AutoEncryptionOptions: AutoEncryptionOptions, Filter: {[P in keyof TSchema]?: Condition<TSchema[P]>} & RootFilterOperators<TSchema>, MapReduceOptions: MapReduceOptions, MongoInvalidArgumentError: MongoInvalidArgumentError, ConnectionReadyEvent: ConnectionReadyEvent, ConnectionPoolClearedEvent: ConnectionPoolClearedEvent, AnyBulkWriteOperation: {insertOne: InsertOneModel<TSchema>} | {replaceOne: ReplaceOneModel<TSchema>} | {updateOne: UpdateOneModel<TSchema>} | {updateMany: UpdateManyModel<TSchema>} | {deleteOne: DeleteOneModel<TSchema>} | {deleteMany: DeleteManyModel<TSchema>}, RenameOptions: RenameOptions, MapFunction: (this:TSchema) => void, ConnectionOptions: ConnectionOptions, DriverInfo: DriverInfo, ServerDescription: ServerDescription, MongoTransactionError: MongoTransactionError, InsertOneModel: InsertOneModel, ServerApiVersion: Readonly<{readonly v1: "1"}>, HedgeOptions: HedgeOptions, ServerType: Readonly<{readonly Standalone: "Standalone", readonly Mongos: "Mongos", readonly PossiblePrimary: "PossiblePrimary", readonly RSPrimary: "RSPrimary", readonly RSSecondary: "RSSecondary", readonly RSArbiter: "RSArbiter", readonly RSOther: "RSOther", readonly RSGhost: "RSGhost", readonly Unknown: "Unknown", readonly LoadBalancer: "LoadBalancer"}>, BatchType: Readonly<{readonly INSERT: 1, readonly UPDATE: 2, readonly DELETE: 3}>, ListCollectionsCursor: ListCollectionsCursor, Projection: Document, BulkResult: BulkResult, ConnectionPoolEvents: {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message">, ServerEvents: {serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, descriptionReceived(description: ServerDescription): void, closed(): void, ended(): void} & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & EventEmitterWithState, MongoServerClosedError: MongoServerClosedError, TopologyType: Readonly<{readonly Single: "Single", readonly ReplicaSetNoPrimary: "ReplicaSetNoPrimary", readonly ReplicaSetWithPrimary: "ReplicaSetWithPrimary", readonly Sharded: "Sharded", readonly Unknown: "Unknown", readonly LoadBalanced: "LoadBalanced"}>, CountOptions: CountOptions, WithoutId: WithoutId, ServerHeartbeatFailedEvent: ServerHeartbeatFailedEvent, ConnectionClosedEvent: ConnectionClosedEvent, MongoKerberosError: MongoKerberosError, Auth: Auth, ConnectionPoolClosedEvent: ConnectionPoolClosedEvent, MongoDecompressionError: MongoDecompressionError, CountDocumentsOptions: CountDocumentsOptions, WriteConcern: WriteConcern, ChangeStreamDocument: ChangeStreamDocument, ErrorDescription: ErrorDescription, MongoParseError: MongoParseError, ChangeStreamOptions: ChangeStreamOptions, WiredTigerData: WiredTigerData, GenericListener: (...args: any[]) => void, DropCollectionOptions: CommandOperationOptions, ValidateCollectionOptions: ValidateCollectionOptions, ServerOpeningEvent: ServerOpeningEvent, MongoCursorInUseError: MongoCursorInUseError, GridFSChunk: GridFSChunk, BitwiseFilter: number | Binary | ReadonlyArray<number>, EnhancedOmit: string extends keyof TRecordOrUnion ? TRecordOrUnion : (TRecordOrUnion extends any ? Pick<TRecordOrUnion, Exclude<keyof TRecordOrUnion, KeyUnion>> : never), ReadConcernLevel: Readonly<{readonly local: "local", readonly majority: "majority", readonly linearizable: "linearizable", readonly available: "available", readonly snapshot: "snapshot"}>, MongoCursorExhaustedError: MongoCursorExhaustedError, ListIndexesOptions: ListIndexesOptions, SortDirection: 1 | -1 | "asc" | "desc" | "ascending" | "descending" | {$meta: string}, FindOneAndReplaceOptions: FindOneAndReplaceOptions, DbOptions: DbOptions, ConnectionPoolMonitoringEvent: ConnectionPoolMonitoringEvent, InsertOneOptions: InsertOneOptions, WriteConcernSettings: WriteConcernSettings, TopologyOptions: TopologyOptions, AbstractCursor: AbstractCursor, Condition: T extends ReadonlyArray<infer U> ? (RegExpOrString<U> | T) : RegExpOrString<T> | FilterOperators<AlternativeType<T>>, GridFSBucketReadStreamOptionsWithRevision: GridFSBucketReadStreamOptionsWithRevision, MatchKeysAndValues: Readonly<Partial<TSchema>> & Record<string, any>, ProfilingLevelOptions: CommandOperationOptions, InsertManyResult: InsertManyResult, TopologyDescriptionOptions: TopologyDescriptionOptions, SelectServerOptions: SelectServerOptions, ConnectionCheckOutFailedEvent: ConnectionCheckOutFailedEvent, ReadPreferenceFromOptions: ReadPreferenceFromOptions, LEGAL_TLS_SOCKET_OPTIONS: readonly ["ALPNProtocols", "ca", "cert", "checkServerIdentity", "ciphers", "crl", "ecdhCurve", "key", "minDHSize", "passphrase", "pfx", "rejectUnauthorized", "secureContext", "secureProtocol", "servername", "session"], ReadConcernLike: ReadConcern | {level: ReadConcernLevel} | "linearizable" | "available" | "majority" | "local" | "snapshot", TransactionOptions: TransactionOptions, EvalOptions: EvalOptions, ListDatabasesResult: ListDatabasesResult, KeysOfOtherType: {[key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? never : key}[keyof TSchema], RegExpOrString: T extends string ? (BSONRegExp | RegExp | T) : T, ClientSession: ClientSession, SupportedSocketOptions: SupportedSocketOptions, Compressor: Readonly<{readonly none: 0, readonly snappy: 1, readonly zlib: 2}>, GridFSBucketOptions: GridFSBucketOptions, GridFSBucketReadStream: GridFSBucketReadStream, BulkWriteOptions: BulkWriteOptions, AnyError: MongoError | Error, ProjectionOperators: Document, ListCollectionsOptions: ListCollectionsOptions, ServerCapabilities: ServerCapabilities, LoggerOptions: LoggerOptions, AggregationCursorOptions: AggregationCursorOptions, ListDatabasesOptions: ListDatabasesOptions, MongoNetworkTimeoutError: MongoNetworkTimeoutError, GridFSFile: GridFSFile, CommandStartedEvent: CommandStartedEvent, CreateCollectionOptions: CreateCollectionOptions, MongoNetworkError: MongoNetworkError, PullAllOperator: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: TSchema[key]} & NotAcceptedFields<TSchema, ReadonlyArray<any>> & {[p: string]: ReadonlyArray<any>}, ModifyResult: ModifyResult, MongoClientEvents: Pick<{serverOpening(event: ServerOpeningEvent): void, serverClosed(event: ServerClosedEvent): void, serverDescriptionChanged(event: ServerDescriptionChangedEvent): void, topologyClosed(event: TopologyClosedEvent): void, topologyOpening(event: TopologyOpeningEvent): void, topologyDescriptionChanged(event: TopologyDescriptionChangedEvent): void, error(error: Error): void, close(): void, timeout(): void} & Omit<{serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, descriptionReceived(description: ServerDescription): void, closed(): void, ended(): void} & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & EventEmitterWithState, "connect"> & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & ConnectionEvents & EventEmitterWithState, "connectionPoolCreated" | "connectionPoolClosed" | "connectionCreated" | "connectionReady" | "connectionClosed" | "connectionCheckOutStarted" | "connectionCheckOutFailed" | "connectionCheckedOut" | "connectionCheckedIn" | "connectionPoolCleared" | "error" | "close" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "timeout" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged"> & {open(mongoClient: MongoClient): void}, PipeOptions: PipeOptions, RoleSpecification: RoleSpecification, WriteConcernErrorData: WriteConcernErrorData, MongoRuntimeError: MongoRuntimeError, ReadPreference: ReadPreference, CursorStreamOptions: CursorStreamOptions, DropIndexesOptions: CommandOperationOptions, UpdateStatement: UpdateStatement, Stream: Socket | TLSSocket, ExplainOptions: ExplainOptions, TopologyVersion: TopologyVersion, AuthMechanismProperties: AuthMechanismProperties, ReadPreferenceLike: ReadPreference | "secondary" | "primaryPreferred" | "nearest" | "secondaryPreferred" | "primary", BSONSymbol: any, BulkWriteResult: BulkWriteResult, Decimal128: any, AutoEncrypter: AutoEncrypter, UpdateOneModel: UpdateOneModel, ArrayOperator: ArrayOperator, KeysOfAType: {[key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? key : never}[keyof TSchema], TimeSeriesCollectionOptions: TimeSeriesCollectionOptions, Map: MapConstructor, WriteError: WriteError, DistinctOptions: CommandOperationOptions, BSONSerializeOptions: BSONSerializeOptions, AbstractCursorEvents: AbstractCursorEvents, CollStats: CollStats, UpdateResult: UpdateResult, ReadPreferenceOptions: ReadPreferenceOptions, CloseOptions: CloseOptions, NumericType: number | Int32 | Long | Decimal128 | Double, MonitorOptions: MonitorOptions, IntegerType: number | Int32 | Long, IsAny: true extends (false & Type) ? ResultIfAny : ResultIfNotAny, InsertOneResult: InsertOneResult, ChangeStreamEvents: {resumeTokenChanged(token: ResumeToken): void, init(response: Document): void, more(response?: (Document | undefined)): void, response(): void, end(): void, error(error: Error): void, change(change: ChangeStreamDocument): void} & AbstractCursorEvents, AddUserOptions: AddUserOptions, ConnectOptions: ConnectOptions, TopologyDescription: TopologyDescription, CollStatsOptions: CollStatsOptions, ReplaceOptions: ReplaceOptions, BSONRegExp: any, MONGO_CLIENT_EVENTS: readonly ["connectionPoolCreated", "connectionPoolClosed", "connectionCreated", "connectionReady", "connectionClosed", "connectionCheckOutStarted", "connectionCheckOutFailed", "connectionCheckedOut", "connectionCheckedIn", "connectionPoolCleared", ...("error" | "close" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "timeout" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged")[]], IndexInformationOptions: IndexInformationOptions, FilterOperators: FilterOperators, TypedEventEmitter: TypedEventEmitter, GridFSBucketWriteStreamOptions: GridFSBucketWriteStreamOptions, DeleteStatement: DeleteStatement, SetProfilingLevelOptions: CommandOperationOptions, EventEmitterWithState: EventEmitterWithState, Long: any, UpdateFilter: {$currentDate?: OnlyFieldsOfType<TSchema, Date | Timestamp, true | {$type: "date" | "timestamp"}>, $inc?: OnlyFieldsOfType<TSchema, NumericType | undefined>, $min?: MatchKeysAndValues<TSchema>, $max?: MatchKeysAndValues<TSchema>, $mul?: OnlyFieldsOfType<TSchema, NumericType | undefined>, $rename?: Record<string, string>, $set?: MatchKeysAndValues<TSchema>, $setOnInsert?: MatchKeysAndValues<TSchema>, $unset?: OnlyFieldsOfType<TSchema, any, "" | true | 1>, $addToSet?: SetFields<TSchema>, $pop?: OnlyFieldsOfType<TSchema, ReadonlyArray<any>, 1 | -1>, $pull?: PullOperator<TSchema>, $push?: PushOperator<TSchema>, $pullAll?: PullAllOperator<TSchema>, $bit?: OnlyFieldsOfType<TSchema, NumericType | undefined, {and: IntegerType} | {or: IntegerType} | {xor: IntegerType}>} & Document, MongoCredentials: MongoCredentials, GridFSBucket: GridFSBucket, TagSet: TagSet, MongoChangeStreamError: MongoChangeStreamError, AcceptedFields: AcceptedFields, DestroyOptions: DestroyOptions, FindOptions: FindOptions, FindOneAndDeleteOptions: FindOneAndDeleteOptions, ConnectionCreatedEvent: ConnectionCreatedEvent, ServerDescriptionChangedEvent: ServerDescriptionChangedEvent, IndexSpecification: ReadonlyArray<string | [string, (-1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number)] | {[p: string]: IndexDirection} | [string, IndexDirection][] | {[p: string]: IndexDirection}[]> | string | [string, (-1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number)] | {[p: string]: IndexDirection} | [string, IndexDirection][] | {[p: string]: IndexDirection}[], TopologyClosedEvent: TopologyClosedEvent, MongoTopologyClosedError: MongoTopologyClosedError, ClientSessionOptions: ClientSessionOptions, Timestamp: any, ExplainVerbosity: Readonly<{readonly queryPlanner: "queryPlanner", readonly queryPlannerExtended: "queryPlannerExtended", readonly executionStats: "executionStats", readonly allPlansExecution: "allPlansExecution"}>, DeleteOneModel: DeleteOneModel, Int32: any, ConnectionCheckedInEvent: ConnectionCheckedInEvent, MongoGridFSStreamError: MongoGridFSStreamError, ResumeOptions: ResumeOptions, MongoServerSelectionError: MongoServerSelectionError, BSONTypeAlias: "double" | "string" | "object" | "array" | "binData" | "undefined" | "objectId" | "bool" | "date" | "null" | "regex" | "dbPointer" | "javascript" | "symbol" | "javascriptWithScope" | "int" | "timestamp" | "long" | "decimal" | "minKey" | "maxKey", MongoBatchReExecutionError: MongoBatchReExecutionError, BulkOperationBase: BulkOperationBase, ReadPreferenceLikeOptions: ReadPreferenceLikeOptions, ReadConcern: ReadConcern, AuthMechanism: Readonly<{readonly MONGODB_AWS: "MONGODB-AWS", readonly MONGODB_CR: "MONGODB-CR", readonly MONGODB_DEFAULT: "DEFAULT", readonly MONGODB_GSSAPI: "GSSAPI", readonly MONGODB_PLAIN: "PLAIN", readonly MONGODB_SCRAM_SHA1: "SCRAM-SHA-1", readonly MONGODB_SCRAM_SHA256: "SCRAM-SHA-256", readonly MONGODB_X509: "MONGODB-X509"}>, ReduceFunction: (key: TKey, values: TValue[]) => TValue, CancellationToken: CancellationToken, LEGAL_TCP_SOCKET_OPTIONS: readonly ["family", "hints", "localAddress", "localPort", "lookup"], MongoExpiredSessionError: MongoExpiredSessionError, MongoError: MongoError, GridFSBucketEvents: GridFSBucketEvents, ResumeToken: unknown, MinKey: any, DbStatsOptions: DbStatsOptions, TopologyOpeningEvent: TopologyOpeningEvent, Batch: Batch, MongoBulkWriteError: MongoBulkWriteError, Transaction: Transaction, ListIndexesCursor: ListIndexesCursor, ServerApi: ServerApi, SchemaMember: {[P in keyof T]?: V} | {[p: string]: V}, Hint: string | Document, Logger: Logger, Collection: Collection, EventsDescription: EventsDescription, ConnectionCheckedOutEvent: ConnectionCheckedOutEvent, CompressorName: "none" | "snappy" | "zlib", ClusterTime: ClusterTime, ServerOptions: Omit<ConnectionPoolOptions, "id" | "generation" | "hostAddress"> & MonitorOptions, AutoEncryptionLoggerLevel: Readonly<{readonly FatalError: 0, readonly Error: 1, readonly Warning: 2, readonly Info: 3, readonly Trace: 4}>, IndexDirection: -1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number, OptionalId: TSchema extends {_id?: any} ? (ObjectId extends TSchema["_id"] ? (EnhancedOmit<TSchema, "_id"> & {_id?: InferIdType<TSchema>}) : WithId<TSchema>) : (EnhancedOmit<TSchema, "_id"> & {_id?: InferIdType<TSchema>}), UpdateDescription: UpdateDescription, UnorderedBulkOperation: UnorderedBulkOperation, CommonEvents: "newListener" | "removeListener", ReturnDocument: Readonly<{readonly BEFORE: "before", readonly AFTER: "after"}>, ServerSession: ServerSession, AlternativeType: T extends ReadonlyArray<infer U> ? (RegExpOrString<U> | T) : RegExpOrString<T>, Db: Db, MongoSystemError: MongoSystemError, Flatten: Type extends ReadonlyArray<infer Item> ? Item : Type, DeleteResult: DeleteResult, AddToSetOperators: AddToSetOperators, StreamDescriptionOptions: StreamDescriptionOptions, CollectionInfo: CollectionInfo, CollectionOptions: CollectionOptions, MonitorEvents: {serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, resetServer(error?: Error): void, resetConnectionPool(): void, close(): void} & EventEmitterWithState, AggregationCursor: AggregationCursor, GridFSBucketReadStreamOptions: GridFSBucketReadStreamOptions, DeleteOptions: DeleteOptions, MongoDriverError: MongoDriverError, MongoMissingCredentialsError: MongoMissingCredentialsError, FindCursor: FindCursor, CollationOptions: CollationOptions, Promise: Promise_2, PkFactory: PkFactory, ClientMetadataOptions: ClientMetadataOptions, IndexDescription: IndexDescription, FindOperators: FindOperators, CommandOperationOptions: CommandOperationOptions, SetFields: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any> | undefined>]?: OptionalId<Flatten<TSchema[key]>> | AddToSetOperators<Array<OptionalId<Flatten<TSchema[key]>>>>} & NotAcceptedFields<TSchema, ReadonlyArray<any> | undefined> & {[p: string]: any}, OrderedBulkOperation: OrderedBulkOperation, RootFilterOperators: RootFilterOperators, BulkWriteOperationError: BulkWriteOperationError, MongoOptions: MongoOptions, CursorCloseOptions: CursorCloseOptions, PullOperator: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Partial<Flatten<TSchema[key]>> | FilterOperations<Flatten<TSchema[key]>>} & NotAcceptedFields<TSchema, ReadonlyArray<any>> & {[p: string]: any}, MongoGridFSChunkError: MongoGridFSChunkError, ClientSessionEvents: ClientSessionEvents, WithSessionCallback: (session: ClientSession) => (Promise<any> | void), OperationOptions: OperationOptions, ConnectionPoolOptions: ConnectionPoolOptions, Admin: Admin, SupportedTLSConnectionOptions: SupportedTLSConnectionOptions, MongoCredentialsOptions: MongoCredentialsOptions, OperationTime: Timestamp, DeleteManyModel: DeleteManyModel, WriteConcernOptions: WriteConcernOptions, SupportedTLSSocketOptions: SupportedTLSSocketOptions, BSONType: Readonly<{readonly double: 1, readonly string: 2, readonly object: 3, readonly array: 4, readonly binData: 5, readonly undefined: 6, readonly objectId: 7, readonly bool: 8, readonly date: 9, readonly null: 10, readonly regex: 11, readonly dbPointer: 12, readonly javascript: 13, readonly symbol: 14, readonly javascriptWithScope: 15, readonly int: 16, readonly timestamp: 17, readonly long: 18, readonly decimal: 19, readonly minKey: -1, readonly maxKey: 127}>, AggregateOptions: AggregateOptions, ServerSessionId: ServerSessionId, ClientMetadata: ClientMetadata, MongoDBNamespace: MongoDBNamespace, Binary: any, WithTransactionCallback: (session: ClientSession) => Promise<T>, TopologyDescriptionChangedEvent: TopologyDescriptionChangedEvent, PushOperator: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Flatten<TSchema[key]> | ArrayOperator<Array<Flatten<TSchema[key]>>>} & NotAcceptedFields<TSchema, ReadonlyArray<any>> & {[p: string]: any}, EndSessionOptions: EndSessionOptions, EstimatedDocumentCountOptions: EstimatedDocumentCountOptions, W: number | "majority", AbstractCursorOptions: AbstractCursorOptions, ServerSelector: (topologyDescription: TopologyDescription, servers: ServerDescription[]) => ServerDescription[], DropDatabaseOptions: CommandOperationOptions, ConnectionEvents: ConnectionEvents, DBRef: any, ReadPreferenceMode: Readonly<{readonly primary: "primary", readonly primaryPreferred: "primaryPreferred", readonly secondary: "secondary", readonly secondaryPreferred: "secondaryPreferred", readonly nearest: "nearest"}>, CommandFailedEvent: CommandFailedEvent, HostAddress: HostAddress, LoggerFunction: (message?: any, ...optionalParams: any[]) => void, MongoCompatibilityError: MongoCompatibilityError, FindOneAndUpdateOptions: FindOneAndUpdateOptions, Double: any, WithId: string extends keyof TSchema ? TSchema : (TSchema extends any ? Pick<TSchema, Exclude<keyof TSchema, "_id">> : never) & {_id: InferIdType<TSchema>}, MongoNetworkErrorOptions: MongoNetworkErrorOptions, RemoveUserOptions: CommandOperationOptions, GridFSBucketWriteStream: GridFSBucketWriteStream, Code: any, MongoNotConnectedError: MongoNotConnectedError, UpdateOptions: UpdateOptions, ConnectionCheckOutStartedEvent: ConnectionCheckOutStartedEvent, ServerClosedEvent: ServerClosedEvent, UpdateManyModel: UpdateManyModel, ProfilingLevel: Readonly<{readonly off: "off", readonly slowOnly: "slow_only", readonly all: "all"}>, SupportedNodeConnectionOptions: SupportedTLSConnectionOptions & SupportedTLSSocketOptions & SupportedSocketOptions, ReplaceOneModel: ReplaceOneModel, MongoWriteConcernError: MongoWriteConcernError, RunCommandOptions: CommandOperationOptions, WriteConcernError: WriteConcernError, CURSOR_FLAGS: readonly ["tailable", "oplogReplay", "noCursorTimeout", "awaitData", "exhaust", "partial"], MongoAPIError: MongoAPIError, MaxKey: any, MongoMissingDependencyError: MongoMissingDependencyError, CursorFlag: "tailable" | "oplogReplay" | "noCursorTimeout" | "awaitData" | "exhaust" | "partial", CommandSucceededEvent: CommandSucceededEvent, FinalizeFunction: (key: TKey, reducedValue: TValue) => TValue, Callback: (error?: AnyError, result?: T) => void, ServerHeartbeatSucceededEvent: ServerHeartbeatSucceededEvent, TopologyEvents: {serverOpening(event: ServerOpeningEvent): void, serverClosed(event: ServerClosedEvent): void, serverDescriptionChanged(event: ServerDescriptionChangedEvent): void, topologyClosed(event: TopologyClosedEvent): void, topologyOpening(event: TopologyOpeningEvent): void, topologyDescriptionChanged(event: TopologyDescriptionChangedEvent): void, error(error: Error): void, close(): void, timeout(): void} & Omit<{serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, descriptionReceived(description: ServerDescription): void, closed(): void, ended(): void} & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & EventEmitterWithState, "connect"> & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & ConnectionEvents & EventEmitterWithState, MongoServerError: MongoServerError, OnlyFieldsOfType: true extends (false & TSchema[keyof TSchema]) ? Record<string, FieldType> : (AcceptedFields<TSchema, FieldType, AssignableType> & NotAcceptedFields<TSchema, FieldType> & Record<string, AssignableType>), LoggerLevel: Readonly<{readonly ERROR: "error", readonly WARN: "warn", readonly INFO: "info", readonly DEBUG: "debug", readonly error: "error", readonly warn: "warn", readonly info: "info", readonly debug: "debug"}>, Document: any, ObjectId: any, Sort: string | 1 | -1 | "asc" | "desc" | "ascending" | "descending" | string[] | {[p: string]: SortDirection} | Map<string, SortDirection> | [string, SortDirection][] | [string, (1 | -1 | "asc" | "desc" | "ascending" | "descending" | {$meta: string})]}}
 *
 */
export const Database: {
    NotAcceptedFields: any;
    ServerHeartbeatStartedEvent: any;
    MongoClientOptions: any;
    ExplainVerbosityLike: string | boolean;
    ChangeStream: any;
    ConnectionPoolCreatedEvent: any;
    OneOrMore: ReadonlyArray<any> | any;
    MongoClient: any;
    CreateIndexesOptions: any;
    StreamDescription: any;
    InferIdType: any;
    FilterOperations: any;
    ObjectID: any;
    AutoEncryptionOptions: any;
    Filter: any;
    MapReduceOptions: any;
    MongoInvalidArgumentError: any;
    ConnectionReadyEvent: any;
    ConnectionPoolClearedEvent: any;
    AnyBulkWriteOperation: {
        insertOne: any;
    } | {
        replaceOne: any;
    } | {
        updateOne: any;
    } | {
        updateMany: any;
    } | {
        deleteOne: any;
    } | {
        deleteMany: any;
    };
    RenameOptions: any;
    MapFunction: (this: any) => void;
    ConnectionOptions: any;
    DriverInfo: any;
    ServerDescription: any;
    MongoTransactionError: any;
    InsertOneModel: any;
    ServerApiVersion: Readonly<{
        readonly v1: "1";
    }>;
    HedgeOptions: any;
    ServerType: Readonly<{
        readonly Standalone: "Standalone";
        readonly Mongos: "Mongos";
        readonly PossiblePrimary: "PossiblePrimary";
        readonly RSPrimary: "RSPrimary";
        readonly RSSecondary: "RSSecondary";
        readonly RSArbiter: "RSArbiter";
        readonly RSOther: "RSOther";
        readonly RSGhost: "RSGhost";
        readonly Unknown: "Unknown";
        readonly LoadBalancer: "LoadBalancer";
    }>;
    BatchType: Readonly<{
        readonly INSERT: 1;
        readonly UPDATE: 2;
        readonly DELETE: 3;
    }>;
    ListCollectionsCursor: any;
    Projection: Document;
    BulkResult: any;
    ConnectionPoolEvents: {
        connectionPoolCreated(event: any): void;
        connectionPoolClosed(event: any): void;
        connectionPoolCleared(event: any): void;
        connectionCreated(event: any): void;
        connectionReady(event: any): void;
        connectionClosed(event: any): void;
        connectionCheckOutStarted(event: any): void;
        connectionCheckOutFailed(event: any): void;
        connectionCheckedOut(event: any): void;
        connectionCheckedIn(event: any): void;
    } & Omit<any, "message" | "close">;
    ServerEvents: any;
    MongoServerClosedError: any;
    TopologyType: Readonly<{
        readonly Single: "Single";
        readonly ReplicaSetNoPrimary: "ReplicaSetNoPrimary";
        readonly ReplicaSetWithPrimary: "ReplicaSetWithPrimary";
        readonly Sharded: "Sharded";
        readonly Unknown: "Unknown";
        readonly LoadBalanced: "LoadBalanced";
    }>;
    CountOptions: any;
    WithoutId: any;
    ServerHeartbeatFailedEvent: any;
    ConnectionClosedEvent: any;
    MongoKerberosError: any;
    Auth: any;
    ConnectionPoolClosedEvent: any;
    MongoDecompressionError: any;
    CountDocumentsOptions: any;
    WriteConcern: any;
    ChangeStreamDocument: any;
    ErrorDescription: any;
    MongoParseError: any;
    ChangeStreamOptions: any;
    WiredTigerData: any;
    GenericListener: (...args: any[]) => void;
    DropCollectionOptions: any;
    ValidateCollectionOptions: any;
    ServerOpeningEvent: any;
    MongoCursorInUseError: any;
    GridFSChunk: any;
    BitwiseFilter: number | any | ReadonlyArray<number>;
    EnhancedOmit: any;
    ReadConcernLevel: Readonly<{
        readonly local: "local";
        readonly majority: "majority";
        readonly linearizable: "linearizable";
        readonly available: "available";
        readonly snapshot: "snapshot";
    }>;
    MongoCursorExhaustedError: any;
    ListIndexesOptions: any;
    SortDirection: 1 | -1 | "asc" | "desc" | "ascending" | "descending" | {
        $meta: string;
    };
    FindOneAndReplaceOptions: any;
    DbOptions: any;
    ConnectionPoolMonitoringEvent: any;
    InsertOneOptions: any;
    WriteConcernSettings: any;
    TopologyOptions: any;
    AbstractCursor: any;
    Condition: any;
    GridFSBucketReadStreamOptionsWithRevision: any;
    MatchKeysAndValues: Readonly<Partial<any>> & Record<string, any>;
    ProfilingLevelOptions: any;
    InsertManyResult: any;
    TopologyDescriptionOptions: any;
    SelectServerOptions: any;
    ConnectionCheckOutFailedEvent: any;
    ReadPreferenceFromOptions: any;
    LEGAL_TLS_SOCKET_OPTIONS: readonly ["ALPNProtocols", "ca", "cert", "checkServerIdentity", "ciphers", "crl", "ecdhCurve", "key", "minDHSize", "passphrase", "pfx", "rejectUnauthorized", "secureContext", "secureProtocol", "servername", "session"];
    ReadConcernLike: any | {
        level: any;
    } | "linearizable" | "available" | "majority" | "local" | "snapshot";
    TransactionOptions: any;
    EvalOptions: any;
    ListDatabasesResult: any;
    KeysOfOtherType: never;
    RegExpOrString: any extends string ? (any | RegExp | any) : any;
    ClientSession: any;
    SupportedSocketOptions: any;
    Compressor: Readonly<{
        readonly none: 0;
        readonly snappy: 1;
        readonly zlib: 2;
    }>;
    GridFSBucketOptions: any;
    GridFSBucketReadStream: any;
    BulkWriteOptions: any;
    AnyError: any | Error;
    ProjectionOperators: Document;
    ListCollectionsOptions: any;
    ServerCapabilities: any;
    LoggerOptions: any;
    AggregationCursorOptions: any;
    ListDatabasesOptions: any;
    MongoNetworkTimeoutError: any;
    GridFSFile: any;
    CommandStartedEvent: any;
    CreateCollectionOptions: any;
    MongoNetworkError: any;
    PullAllOperator: any;
    ModifyResult: any;
    MongoClientEvents: Pick<any, "error" | "close" | "timeout" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged" | "connectionPoolCreated" | "connectionPoolClosed" | "connectionCreated" | "connectionReady" | "connectionClosed" | "connectionCheckOutStarted" | "connectionCheckOutFailed" | "connectionCheckedOut" | "connectionCheckedIn" | "connectionPoolCleared"> & {
        open(mongoClient: any): void;
    };
    PipeOptions: any;
    RoleSpecification: any;
    WriteConcernErrorData: any;
    MongoRuntimeError: any;
    ReadPreference: any;
    CursorStreamOptions: any;
    DropIndexesOptions: any;
    UpdateStatement: any;
    Stream: any | any;
    ExplainOptions: any;
    TopologyVersion: any;
    AuthMechanismProperties: any;
    ReadPreferenceLike: any | "secondary" | "primaryPreferred" | "nearest" | "secondaryPreferred" | "primary";
    BSONSymbol: any;
    BulkWriteResult: any;
    Decimal128: any;
    AutoEncrypter: any;
    UpdateOneModel: any;
    ArrayOperator: any;
    KeysOfAType: string;
    TimeSeriesCollectionOptions: any;
    Map: MapConstructor;
    WriteError: any;
    DistinctOptions: any;
    BSONSerializeOptions: any;
    AbstractCursorEvents: any;
    CollStats: any;
    UpdateResult: any;
    ReadPreferenceOptions: any;
    CloseOptions: any;
    NumericType: number | any | any | any | any;
    MonitorOptions: any;
    IntegerType: number | any | any;
    IsAny: any;
    InsertOneResult: any;
    ChangeStreamEvents: any;
    AddUserOptions: any;
    ConnectOptions: any;
    TopologyDescription: any;
    CollStatsOptions: any;
    ReplaceOptions: any;
    BSONRegExp: any;
    MONGO_CLIENT_EVENTS: readonly ["connectionPoolCreated", "connectionPoolClosed", "connectionCreated", "connectionReady", "connectionClosed", "connectionCheckOutStarted", "connectionCheckOutFailed", "connectionCheckedOut", "connectionCheckedIn", "connectionPoolCleared", ...("error" | "close" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "timeout" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged")[]];
    IndexInformationOptions: any;
    FilterOperators: any;
    TypedEventEmitter: any;
    GridFSBucketWriteStreamOptions: any;
    DeleteStatement: any;
    SetProfilingLevelOptions: any;
    EventEmitterWithState: any;
    Long: any;
    UpdateFilter: {
        $currentDate?: any;
        $inc?: any;
        $min?: any;
        $max?: any;
        $mul?: any;
        $rename?: Record<string, string>;
        $set?: any;
        $setOnInsert?: any;
        $unset?: any;
        $addToSet?: any;
        $pop?: any;
        $pull?: any;
        $push?: any;
        $pullAll?: any;
        $bit?: any;
    } & Document;
    MongoCredentials: any;
    GridFSBucket: any;
    TagSet: any;
    MongoChangeStreamError: any;
    AcceptedFields: any;
    DestroyOptions: any;
    FindOptions: any;
    FindOneAndDeleteOptions: any;
    ConnectionCreatedEvent: any;
    ServerDescriptionChangedEvent: any;
    IndexSpecification: string | [string, number | "text" | "2d" | "2dsphere" | "geoHaystack"] | [string, any][] | readonly (string | [string, number | "text" | "2d" | "2dsphere" | "geoHaystack"] | [string, any][] | {
        [p: string]: any;
    } | {
        [p: string]: any;
    }[])[] | {
        [p: string]: any;
    } | {
        [p: string]: any;
    }[];
    TopologyClosedEvent: any;
    MongoTopologyClosedError: any;
    ClientSessionOptions: any;
    Timestamp: any;
    ExplainVerbosity: Readonly<{
        readonly queryPlanner: "queryPlanner";
        readonly queryPlannerExtended: "queryPlannerExtended";
        readonly executionStats: "executionStats";
        readonly allPlansExecution: "allPlansExecution";
    }>;
    DeleteOneModel: any;
    Int32: any;
    ConnectionCheckedInEvent: any;
    MongoGridFSStreamError: any;
    ResumeOptions: any;
    MongoServerSelectionError: any;
    BSONTypeAlias: "double" | "string" | "object" | "array" | "binData" | "undefined" | "objectId" | "bool" | "date" | "null" | "regex" | "dbPointer" | "javascript" | "symbol" | "javascriptWithScope" | "int" | "timestamp" | "long" | "decimal" | "minKey" | "maxKey";
    MongoBatchReExecutionError: any;
    BulkOperationBase: any;
    ReadPreferenceLikeOptions: any;
    ReadConcern: any;
    AuthMechanism: Readonly<{
        readonly MONGODB_AWS: "MONGODB-AWS";
        readonly MONGODB_CR: "MONGODB-CR";
        readonly MONGODB_DEFAULT: "DEFAULT";
        readonly MONGODB_GSSAPI: "GSSAPI";
        readonly MONGODB_PLAIN: "PLAIN";
        readonly MONGODB_SCRAM_SHA1: "SCRAM-SHA-1";
        readonly MONGODB_SCRAM_SHA256: "SCRAM-SHA-256";
        readonly MONGODB_X509: "MONGODB-X509";
    }>;
    ReduceFunction: (key: any, values: any[]) => any;
    CancellationToken: any;
    LEGAL_TCP_SOCKET_OPTIONS: readonly ["family", "hints", "localAddress", "localPort", "lookup"];
    MongoExpiredSessionError: any;
    MongoError: any;
    GridFSBucketEvents: any;
    ResumeToken: unknown;
    MinKey: any;
    DbStatsOptions: any;
    TopologyOpeningEvent: any;
    Batch: any;
    MongoBulkWriteError: any;
    Transaction: any;
    ListIndexesCursor: any;
    ServerApi: any;
    SchemaMember: {
        [x: string]: any;
    } | {
        [p: string]: any;
    };
    Hint: string | Document;
    Logger: any;
    Collection: any;
    EventsDescription: any;
    ConnectionCheckedOutEvent: any;
    CompressorName: "none" | "snappy" | "zlib";
    ClusterTime: any;
    ServerOptions: Omit<any, "id" | "generation" | "hostAddress"> & any;
    AutoEncryptionLoggerLevel: Readonly<{
        readonly FatalError: 0;
        readonly Error: 1;
        readonly Warning: 2;
        readonly Info: 3;
        readonly Trace: 4;
    }>;
    IndexDirection: -1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number;
    OptionalId: any extends {
        _id?: any;
    } ? (any extends any["_id"] ? (any & {
        _id?: any;
    }) : any) : (any & {
        _id?: any;
    });
    UpdateDescription: any;
    UnorderedBulkOperation: any;
    CommonEvents: "newListener" | "removeListener";
    ReturnDocument: Readonly<{
        readonly BEFORE: "before";
        readonly AFTER: "after";
    }>;
    ServerSession: any;
    AlternativeType: any;
    Db: any;
    MongoSystemError: any;
    Flatten: any;
    DeleteResult: any;
    AddToSetOperators: any;
    StreamDescriptionOptions: any;
    CollectionInfo: any;
    CollectionOptions: any;
    MonitorEvents: any;
    AggregationCursor: any;
    GridFSBucketReadStreamOptions: any;
    DeleteOptions: any;
    MongoDriverError: any;
    MongoMissingCredentialsError: any;
    FindCursor: any;
    CollationOptions: any;
    Promise: any;
    PkFactory: any;
    ClientMetadataOptions: any;
    IndexDescription: any;
    FindOperators: any;
    CommandOperationOptions: any;
    SetFields: any;
    OrderedBulkOperation: any;
    RootFilterOperators: any;
    BulkWriteOperationError: any;
    MongoOptions: any;
    CursorCloseOptions: any;
    PullOperator: any;
    MongoGridFSChunkError: any;
    ClientSessionEvents: any;
    WithSessionCallback: (session: any) => (Promise<any> | void);
    OperationOptions: any;
    ConnectionPoolOptions: any;
    Admin: any;
    SupportedTLSConnectionOptions: any;
    MongoCredentialsOptions: any;
    OperationTime: any;
    DeleteManyModel: any;
    WriteConcernOptions: any;
    SupportedTLSSocketOptions: any;
    BSONType: Readonly<{
        readonly double: 1;
        readonly string: 2;
        readonly object: 3;
        readonly array: 4;
        readonly binData: 5;
        readonly undefined: 6;
        readonly objectId: 7;
        readonly bool: 8;
        readonly date: 9;
        readonly null: 10;
        readonly regex: 11;
        readonly dbPointer: 12;
        readonly javascript: 13;
        readonly symbol: 14;
        readonly javascriptWithScope: 15;
        readonly int: 16;
        readonly timestamp: 17;
        readonly long: 18;
        readonly decimal: 19;
        readonly minKey: -1;
        readonly maxKey: 127;
    }>;
    AggregateOptions: any;
    ServerSessionId: any;
    ClientMetadata: any;
    MongoDBNamespace: any;
    Binary: any;
    WithTransactionCallback: (session: any) => Promise<any>;
    TopologyDescriptionChangedEvent: any;
    PushOperator: any;
    EndSessionOptions: any;
    EstimatedDocumentCountOptions: any;
    W: number | "majority";
    AbstractCursorOptions: any;
    ServerSelector: (topologyDescription: any, servers: any[]) => any[];
    DropDatabaseOptions: any;
    ConnectionEvents: any;
    DBRef: any;
    ReadPreferenceMode: Readonly<{
        readonly primary: "primary";
        readonly primaryPreferred: "primaryPreferred";
        readonly secondary: "secondary";
        readonly secondaryPreferred: "secondaryPreferred";
        readonly nearest: "nearest";
    }>;
    CommandFailedEvent: any;
    HostAddress: any;
    LoggerFunction: (message?: any, ...optionalParams: any[]) => void;
    MongoCompatibilityError: any;
    FindOneAndUpdateOptions: any;
    Double: any;
    WithId: any;
    MongoNetworkErrorOptions: any;
    RemoveUserOptions: any;
    GridFSBucketWriteStream: any;
    Code: any;
    MongoNotConnectedError: any;
    UpdateOptions: any;
    ConnectionCheckOutStartedEvent: any;
    ServerClosedEvent: any;
    UpdateManyModel: any;
    ProfilingLevel: Readonly<{
        readonly off: "off";
        readonly slowOnly: "slow_only";
        readonly all: "all";
    }>;
    SupportedNodeConnectionOptions: any & any & any;
    ReplaceOneModel: any;
    MongoWriteConcernError: any;
    RunCommandOptions: any;
    WriteConcernError: any;
    CURSOR_FLAGS: readonly ["tailable", "oplogReplay", "noCursorTimeout", "awaitData", "exhaust", "partial"];
    MongoAPIError: any;
    MaxKey: any;
    MongoMissingDependencyError: any;
    CursorFlag: "tailable" | "oplogReplay" | "noCursorTimeout" | "awaitData" | "exhaust" | "partial";
    CommandSucceededEvent: any;
    FinalizeFunction: (key: any, reducedValue: any) => any;
    Callback: (error?: any, result?: any) => void;
    ServerHeartbeatSucceededEvent: any;
    TopologyEvents: any;
    MongoServerError: any;
    OnlyFieldsOfType: true extends (false & any[keyof any]) ? Record<string, any> : (any & any & Record<string, any>);
    LoggerLevel: Readonly<{
        readonly ERROR: "error";
        readonly WARN: "warn";
        readonly INFO: "info";
        readonly DEBUG: "debug";
        readonly error: "error";
        readonly warn: "warn";
        readonly info: "info";
        readonly debug: "debug";
    }>;
    Document: any;
    ObjectId: any;
    Sort: string | string[] | 1 | -1 | [string, any][] | Map<string, any> | {
        [p: string]: any;
    } | [string, "desc" | 1 | -1 | "asc" | "ascending" | "descending" | {
        $meta: string;
    }];
};
/***
 *
 * @type {{Octokit: any, createNodeMiddleware: any, App: any, OAuthApp: any}}
 *
 */
export const Octokit: {
    Octokit: any;
    createNodeMiddleware: any;
    App: any;
    OAuthApp: any;
};
/***
 *
 * @type {{(options?: e.RouterOptions): Router}}
 *
 */
export const Router: (options?: any) => any;
/***
 *
 * @type {AxiosStatic}
 *
 */
export const Axios: any;
/***
 *
 * @type {e | (() => Express)}
 *
 */
export const API: any | (() => any);
/***
 *
 * @type {{Date: Schema.Types.Date, Aggregate: Aggregate, ClientSession: ClientSession, ValidatorProps: ValidatorProps, NumericTypes: number | Schema.Types.Decimal128 | Double | Int32 | Long, Models: Models, LeanDocumentOrArrayWithRawType: 0 extends (1 & T) ? T : (T extends unknown[] ? RawDocType[] : (T extends Document ? RawDocType : T)), _LeanDocument: _LeanDocument, AnyKeys: AnyKeys, version: string, AddToSetOperators: AddToSetOperators, SchemaOptions: SchemaOptions, PopulatedDoc: PopulatedType | RawId, models: Models, plugin: (fn: (schema: Schema, opts?: any) => void, opts?: any) => typeof mongoose, InsertManyOptions: InsertManyOptions, pathsToValidate: string[] | string, ErrorHandlingMiddlewareFunction: (this:ThisType, err: NativeError, res: ResType, next: (err?: CallbackError) => void) => void, connect: (uri: string, options: ConnectOptions, callback: CallbackWithoutResult) => void, CallbackError: NativeError | null, ConnectionStates: module:mongoose.ConnectionStates, ObjectId: Schema.Types.ObjectId, OnlyFieldsOfType: OnlyFieldsOfType, PromiseProvider: any, Document: Document, ValidateFn: ValidateFn, set: <K extends keyof MongooseOptions>(key: K, value: MongooseOptions[K]) => typeof mongoose, Condition: T extends ObjectId ? (string | (string | T)[] | T) : (T extends string ? (RegExp | T[] | T) : (T extends infer U[] ? (T | U) : (T[] | T))) | QuerySelector<T extends ObjectId ? (string | (string | T)[] | T) : (T extends string ? (RegExp | T[] | T) : (T extends infer U[] ? (T | U) : (T[] | T)))>, ReturnsNewDoc: {new: true} | {returnOriginal: false} | {returnDocument: "after"}, CastError: Error.CastError, MapReduceOptions: MapReduceOptions, mquery: mquery, Model: Model<any>, model: <T>(name: string, schema?: (Schema<T, any, any> | Schema<T & Document, any, any>), collection?: string, skipInit?: boolean) => Model<T>, MongooseQueryOptions: MongooseQueryOptions, SchemaDefinitionType: T extends Document ? Omit<T, Exclude<keyof Document, "_id" | "id" | "__v">> : T, MongooseDocumentMiddleware: "validate" | "save" | "remove" | "updateOne" | "deleteOne" | "init", connection: Connection, disconnect: () => Promise<void>, startSession: (options?: ClientSessionOptions) => Promise<ClientSession>, Require_id: T extends {_id?: any} ? (T & {_id: T["_id"]}) : (T & {_id: Types.ObjectId}), LeanDocumentElement: T extends unknown[] ? LeanArray<T> : (T extends Document ? LeanDocument<T> : T), isValidObjectId: (v: any) => boolean, MatchKeysAndValues: ReadonlyPartial<TSchema> & AnyObject, AsyncValidateFn: AsyncValidateFn, ReadonlyPartial: ReadonlyPartial, createConnection: (uri: string, options?: ConnectOptions) => Connection, SchemaTimestampsConfig: SchemaTimestampsConfig, modelNames: () => Array<string>, ToObjectOptions: ToObjectOptions, ArrayOperator: ArrayOperator, CollectionBase: CollectionBase, LeanType: 0 extends (1 & T) ? T : (T extends TreatAsPrimitives ? T : (T extends Types.Subdocument ? Omit<LeanDocument<T>, "$isSingleNested" | "ownerDocument" | "parent"> : LeanDocument<T>)), WriteConcern: WriteConcern, pathsToSkip: string[] | string, Promise: any, IndexOptions: IndexOptions, PreMiddlewareFunction: (this:T, next: (err?: CallbackError) => void) => (void | Promise<void>), MongooseQueryMiddleware: "count" | "deleteMany" | "deleteOne" | "distinct" | "find" | "findOne" | "findOneAndDelete" | "findOneAndRemove" | "findOneAndUpdate" | "remove" | "update" | "updateOne" | "updateMany", mongo: {NotAcceptedFields: NotAcceptedFields, ServerHeartbeatStartedEvent: ServerHeartbeatStartedEvent, MongoClientOptions: MongoClientOptions, ExplainVerbosityLike: string | boolean, ChangeStream: ChangeStream, ConnectionPoolCreatedEvent: ConnectionPoolCreatedEvent, OneOrMore: ReadonlyArray<T> | T, MongoClient: MongoClient, CreateIndexesOptions: CreateIndexesOptions, StreamDescription: StreamDescription, InferIdType: TSchema extends {_id: infer IdType} ? ({} extends infer IdType ? Exclude<IdType, {}> : (unknown extends infer IdType ? ObjectId : IdType)) : ObjectId, FilterOperations: T extends Record<string, any> ? {[key in keyof T]?: FilterOperators<T[key]>} : FilterOperators<T>, ObjectID: ObjectId, AutoEncryptionOptions: AutoEncryptionOptions, Filter: {[P in keyof TSchema]?: Condition<TSchema[P]>} & RootFilterOperators<TSchema>, MapReduceOptions: MapReduceOptions, MongoInvalidArgumentError: MongoInvalidArgumentError, ConnectionReadyEvent: ConnectionReadyEvent, ConnectionPoolClearedEvent: ConnectionPoolClearedEvent, AnyBulkWriteOperation: {insertOne: InsertOneModel<TSchema>} | {replaceOne: ReplaceOneModel<TSchema>} | {updateOne: UpdateOneModel<TSchema>} | {updateMany: UpdateManyModel<TSchema>} | {deleteOne: DeleteOneModel<TSchema>} | {deleteMany: DeleteManyModel<TSchema>}, RenameOptions: RenameOptions, MapFunction: (this:TSchema) => void, ConnectionOptions: ConnectionOptions, DriverInfo: DriverInfo, ServerDescription: ServerDescription, MongoTransactionError: MongoTransactionError, InsertOneModel: InsertOneModel, ServerApiVersion: Readonly<{readonly v1: "1"}>, HedgeOptions: HedgeOptions, ServerType: Readonly<{readonly Standalone: "Standalone", readonly Mongos: "Mongos", readonly PossiblePrimary: "PossiblePrimary", readonly RSPrimary: "RSPrimary", readonly RSSecondary: "RSSecondary", readonly RSArbiter: "RSArbiter", readonly RSOther: "RSOther", readonly RSGhost: "RSGhost", readonly Unknown: "Unknown", readonly LoadBalancer: "LoadBalancer"}>, BatchType: Readonly<{readonly INSERT: 1, readonly UPDATE: 2, readonly DELETE: 3}>, ListCollectionsCursor: ListCollectionsCursor, Projection: Document, BulkResult: BulkResult, ConnectionPoolEvents: {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message">, ServerEvents: {serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, descriptionReceived(description: ServerDescription): void, closed(): void, ended(): void} & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & EventEmitterWithState, MongoServerClosedError: MongoServerClosedError, TopologyType: Readonly<{readonly Single: "Single", readonly ReplicaSetNoPrimary: "ReplicaSetNoPrimary", readonly ReplicaSetWithPrimary: "ReplicaSetWithPrimary", readonly Sharded: "Sharded", readonly Unknown: "Unknown", readonly LoadBalanced: "LoadBalanced"}>, CountOptions: CountOptions, WithoutId: WithoutId, ServerHeartbeatFailedEvent: ServerHeartbeatFailedEvent, ConnectionClosedEvent: ConnectionClosedEvent, MongoKerberosError: MongoKerberosError, Auth: Auth, ConnectionPoolClosedEvent: ConnectionPoolClosedEvent, MongoDecompressionError: MongoDecompressionError, CountDocumentsOptions: CountDocumentsOptions, WriteConcern: WriteConcern, ChangeStreamDocument: ChangeStreamDocument, ErrorDescription: ErrorDescription, MongoParseError: MongoParseError, ChangeStreamOptions: ChangeStreamOptions, WiredTigerData: WiredTigerData, GenericListener: (...args: any[]) => void, DropCollectionOptions: CommandOperationOptions, ValidateCollectionOptions: ValidateCollectionOptions, ServerOpeningEvent: ServerOpeningEvent, MongoCursorInUseError: MongoCursorInUseError, GridFSChunk: GridFSChunk, BitwiseFilter: number | Binary | ReadonlyArray<number>, EnhancedOmit: string extends keyof TRecordOrUnion ? TRecordOrUnion : (TRecordOrUnion extends any ? Pick<TRecordOrUnion, Exclude<keyof TRecordOrUnion, KeyUnion>> : never), ReadConcernLevel: Readonly<{readonly local: "local", readonly majority: "majority", readonly linearizable: "linearizable", readonly available: "available", readonly snapshot: "snapshot"}>, MongoCursorExhaustedError: MongoCursorExhaustedError, ListIndexesOptions: ListIndexesOptions, SortDirection: 1 | -1 | "asc" | "desc" | "ascending" | "descending" | {$meta: string}, FindOneAndReplaceOptions: FindOneAndReplaceOptions, DbOptions: DbOptions, ConnectionPoolMonitoringEvent: ConnectionPoolMonitoringEvent, InsertOneOptions: InsertOneOptions, WriteConcernSettings: WriteConcernSettings, TopologyOptions: TopologyOptions, AbstractCursor: AbstractCursor, Condition: T extends ReadonlyArray<infer U> ? (RegExpOrString<U> | T) : RegExpOrString<T> | FilterOperators<AlternativeType<T>>, GridFSBucketReadStreamOptionsWithRevision: GridFSBucketReadStreamOptionsWithRevision, MatchKeysAndValues: Readonly<Partial<TSchema>> & Record<string, any>, ProfilingLevelOptions: CommandOperationOptions, InsertManyResult: InsertManyResult, TopologyDescriptionOptions: TopologyDescriptionOptions, SelectServerOptions: SelectServerOptions, ConnectionCheckOutFailedEvent: ConnectionCheckOutFailedEvent, ReadPreferenceFromOptions: ReadPreferenceFromOptions, LEGAL_TLS_SOCKET_OPTIONS: readonly ["ALPNProtocols", "ca", "cert", "checkServerIdentity", "ciphers", "crl", "ecdhCurve", "key", "minDHSize", "passphrase", "pfx", "rejectUnauthorized", "secureContext", "secureProtocol", "servername", "session"], ReadConcernLike: ReadConcern | {level: ReadConcernLevel} | "linearizable" | "available" | "majority" | "local" | "snapshot", TransactionOptions: TransactionOptions, EvalOptions: EvalOptions, ListDatabasesResult: ListDatabasesResult, KeysOfOtherType: {[key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? never : key}[keyof TSchema], RegExpOrString: T extends string ? (BSONRegExp | RegExp | T) : T, ClientSession: ClientSession, SupportedSocketOptions: SupportedSocketOptions, Compressor: Readonly<{readonly none: 0, readonly snappy: 1, readonly zlib: 2}>, GridFSBucketOptions: GridFSBucketOptions, GridFSBucketReadStream: GridFSBucketReadStream, BulkWriteOptions: BulkWriteOptions, AnyError: MongoError | Error, ProjectionOperators: Document, ListCollectionsOptions: ListCollectionsOptions, ServerCapabilities: ServerCapabilities, LoggerOptions: LoggerOptions, AggregationCursorOptions: AggregationCursorOptions, ListDatabasesOptions: ListDatabasesOptions, MongoNetworkTimeoutError: MongoNetworkTimeoutError, GridFSFile: GridFSFile, CommandStartedEvent: CommandStartedEvent, CreateCollectionOptions: CreateCollectionOptions, MongoNetworkError: MongoNetworkError, PullAllOperator: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: TSchema[key]} & NotAcceptedFields<TSchema, ReadonlyArray<any>> & {[p: string]: ReadonlyArray<any>}, ModifyResult: ModifyResult, MongoClientEvents: Pick<{serverOpening(event: ServerOpeningEvent): void, serverClosed(event: ServerClosedEvent): void, serverDescriptionChanged(event: ServerDescriptionChangedEvent): void, topologyClosed(event: TopologyClosedEvent): void, topologyOpening(event: TopologyOpeningEvent): void, topologyDescriptionChanged(event: TopologyDescriptionChangedEvent): void, error(error: Error): void, close(): void, timeout(): void} & Omit<{serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, descriptionReceived(description: ServerDescription): void, closed(): void, ended(): void} & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & EventEmitterWithState, "connect"> & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & ConnectionEvents & EventEmitterWithState, "connectionPoolCreated" | "connectionPoolClosed" | "connectionCreated" | "connectionReady" | "connectionClosed" | "connectionCheckOutStarted" | "connectionCheckOutFailed" | "connectionCheckedOut" | "connectionCheckedIn" | "connectionPoolCleared" | "error" | "close" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "timeout" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged"> & {open(mongoClient: MongoClient): void}, PipeOptions: PipeOptions, RoleSpecification: RoleSpecification, WriteConcernErrorData: WriteConcernErrorData, MongoRuntimeError: MongoRuntimeError, ReadPreference: ReadPreference, CursorStreamOptions: CursorStreamOptions, DropIndexesOptions: CommandOperationOptions, UpdateStatement: UpdateStatement, Stream: Socket | TLSSocket, ExplainOptions: ExplainOptions, TopologyVersion: TopologyVersion, AuthMechanismProperties: AuthMechanismProperties, ReadPreferenceLike: ReadPreference | "secondary" | "primaryPreferred" | "nearest" | "secondaryPreferred" | "primary", BSONSymbol: any, BulkWriteResult: BulkWriteResult, Decimal128: any, AutoEncrypter: AutoEncrypter, UpdateOneModel: UpdateOneModel, ArrayOperator: ArrayOperator, KeysOfAType: {[key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? key : never}[keyof TSchema], TimeSeriesCollectionOptions: TimeSeriesCollectionOptions, Map: MapConstructor, WriteError: WriteError, DistinctOptions: CommandOperationOptions, BSONSerializeOptions: BSONSerializeOptions, AbstractCursorEvents: AbstractCursorEvents, CollStats: CollStats, UpdateResult: UpdateResult, ReadPreferenceOptions: ReadPreferenceOptions, CloseOptions: CloseOptions, NumericType: number | Int32 | Long | Decimal128 | Double, MonitorOptions: MonitorOptions, IntegerType: number | Int32 | Long, IsAny: true extends (false & Type) ? ResultIfAny : ResultIfNotAny, InsertOneResult: InsertOneResult, ChangeStreamEvents: {resumeTokenChanged(token: ResumeToken): void, init(response: Document): void, more(response?: (Document | undefined)): void, response(): void, end(): void, error(error: Error): void, change(change: ChangeStreamDocument): void} & AbstractCursorEvents, AddUserOptions: AddUserOptions, ConnectOptions: ConnectOptions, TopologyDescription: TopologyDescription, CollStatsOptions: CollStatsOptions, ReplaceOptions: ReplaceOptions, BSONRegExp: any, MONGO_CLIENT_EVENTS: readonly ["connectionPoolCreated", "connectionPoolClosed", "connectionCreated", "connectionReady", "connectionClosed", "connectionCheckOutStarted", "connectionCheckOutFailed", "connectionCheckedOut", "connectionCheckedIn", "connectionPoolCleared", ...("error" | "close" | "commandStarted" | "commandSucceeded" | "commandFailed" | "serverHeartbeatStarted" | "serverHeartbeatSucceeded" | "serverHeartbeatFailed" | "timeout" | "serverOpening" | "serverClosed" | "serverDescriptionChanged" | "topologyOpening" | "topologyClosed" | "topologyDescriptionChanged")[]], IndexInformationOptions: IndexInformationOptions, FilterOperators: FilterOperators, TypedEventEmitter: TypedEventEmitter, GridFSBucketWriteStreamOptions: GridFSBucketWriteStreamOptions, DeleteStatement: DeleteStatement, SetProfilingLevelOptions: CommandOperationOptions, EventEmitterWithState: EventEmitterWithState, Long: any, UpdateFilter: {$currentDate?: OnlyFieldsOfType<TSchema, Date | Timestamp, true | {$type: "date" | "timestamp"}>, $inc?: OnlyFieldsOfType<TSchema, NumericType | undefined>, $min?: MatchKeysAndValues<TSchema>, $max?: MatchKeysAndValues<TSchema>, $mul?: OnlyFieldsOfType<TSchema, NumericType | undefined>, $rename?: Record<string, string>, $set?: MatchKeysAndValues<TSchema>, $setOnInsert?: MatchKeysAndValues<TSchema>, $unset?: OnlyFieldsOfType<TSchema, any, "" | true | 1>, $addToSet?: SetFields<TSchema>, $pop?: OnlyFieldsOfType<TSchema, ReadonlyArray<any>, 1 | -1>, $pull?: PullOperator<TSchema>, $push?: PushOperator<TSchema>, $pullAll?: PullAllOperator<TSchema>, $bit?: OnlyFieldsOfType<TSchema, NumericType | undefined, {and: IntegerType} | {or: IntegerType} | {xor: IntegerType}>} & Document, MongoCredentials: MongoCredentials, GridFSBucket: GridFSBucket, TagSet: TagSet, MongoChangeStreamError: MongoChangeStreamError, AcceptedFields: AcceptedFields, DestroyOptions: DestroyOptions, FindOptions: FindOptions, FindOneAndDeleteOptions: FindOneAndDeleteOptions, ConnectionCreatedEvent: ConnectionCreatedEvent, ServerDescriptionChangedEvent: ServerDescriptionChangedEvent, IndexSpecification: ReadonlyArray<string | [string, (-1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number)] | {[p: string]: IndexDirection} | [string, IndexDirection][] | {[p: string]: IndexDirection}[]> | string | [string, (-1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number)] | {[p: string]: IndexDirection} | [string, IndexDirection][] | {[p: string]: IndexDirection}[], TopologyClosedEvent: TopologyClosedEvent, MongoTopologyClosedError: MongoTopologyClosedError, ClientSessionOptions: ClientSessionOptions, Timestamp: any, ExplainVerbosity: Readonly<{readonly queryPlanner: "queryPlanner", readonly queryPlannerExtended: "queryPlannerExtended", readonly executionStats: "executionStats", readonly allPlansExecution: "allPlansExecution"}>, DeleteOneModel: DeleteOneModel, Int32: any, ConnectionCheckedInEvent: ConnectionCheckedInEvent, MongoGridFSStreamError: MongoGridFSStreamError, ResumeOptions: ResumeOptions, MongoServerSelectionError: MongoServerSelectionError, BSONTypeAlias: "double" | "string" | "object" | "array" | "binData" | "undefined" | "objectId" | "bool" | "date" | "null" | "regex" | "dbPointer" | "javascript" | "symbol" | "javascriptWithScope" | "int" | "timestamp" | "long" | "decimal" | "minKey" | "maxKey", MongoBatchReExecutionError: MongoBatchReExecutionError, BulkOperationBase: BulkOperationBase, ReadPreferenceLikeOptions: ReadPreferenceLikeOptions, ReadConcern: ReadConcern, AuthMechanism: Readonly<{readonly MONGODB_AWS: "MONGODB-AWS", readonly MONGODB_CR: "MONGODB-CR", readonly MONGODB_DEFAULT: "DEFAULT", readonly MONGODB_GSSAPI: "GSSAPI", readonly MONGODB_PLAIN: "PLAIN", readonly MONGODB_SCRAM_SHA1: "SCRAM-SHA-1", readonly MONGODB_SCRAM_SHA256: "SCRAM-SHA-256", readonly MONGODB_X509: "MONGODB-X509"}>, ReduceFunction: (key: TKey, values: TValue[]) => TValue, CancellationToken: CancellationToken, LEGAL_TCP_SOCKET_OPTIONS: readonly ["family", "hints", "localAddress", "localPort", "lookup"], MongoExpiredSessionError: MongoExpiredSessionError, MongoError: MongoError, GridFSBucketEvents: GridFSBucketEvents, ResumeToken: unknown, MinKey: any, DbStatsOptions: DbStatsOptions, TopologyOpeningEvent: TopologyOpeningEvent, Batch: Batch, MongoBulkWriteError: MongoBulkWriteError, Transaction: Transaction, ListIndexesCursor: ListIndexesCursor, ServerApi: ServerApi, SchemaMember: {[P in keyof T]?: V} | {[p: string]: V}, Hint: string | Document, Logger: Logger, Collection: Collection, EventsDescription: EventsDescription, ConnectionCheckedOutEvent: ConnectionCheckedOutEvent, CompressorName: "none" | "snappy" | "zlib", ClusterTime: ClusterTime, ServerOptions: Omit<ConnectionPoolOptions, "id" | "generation" | "hostAddress"> & MonitorOptions, AutoEncryptionLoggerLevel: Readonly<{readonly FatalError: 0, readonly Error: 1, readonly Warning: 2, readonly Info: 3, readonly Trace: 4}>, IndexDirection: -1 | 1 | "2d" | "2dsphere" | "text" | "geoHaystack" | number, OptionalId: TSchema extends {_id?: any} ? (ObjectId extends TSchema["_id"] ? (EnhancedOmit<TSchema, "_id"> & {_id?: InferIdType<TSchema>}) : WithId<TSchema>) : (EnhancedOmit<TSchema, "_id"> & {_id?: InferIdType<TSchema>}), UpdateDescription: UpdateDescription, UnorderedBulkOperation: UnorderedBulkOperation, CommonEvents: "newListener" | "removeListener", ReturnDocument: Readonly<{readonly BEFORE: "before", readonly AFTER: "after"}>, ServerSession: ServerSession, AlternativeType: T extends ReadonlyArray<infer U> ? (RegExpOrString<U> | T) : RegExpOrString<T>, Db: Db, MongoSystemError: MongoSystemError, Flatten: Type extends ReadonlyArray<infer Item> ? Item : Type, DeleteResult: DeleteResult, AddToSetOperators: AddToSetOperators, StreamDescriptionOptions: StreamDescriptionOptions, CollectionInfo: CollectionInfo, CollectionOptions: CollectionOptions, MonitorEvents: {serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, resetServer(error?: Error): void, resetConnectionPool(): void, close(): void} & EventEmitterWithState, AggregationCursor: AggregationCursor, GridFSBucketReadStreamOptions: GridFSBucketReadStreamOptions, DeleteOptions: DeleteOptions, MongoDriverError: MongoDriverError, MongoMissingCredentialsError: MongoMissingCredentialsError, FindCursor: FindCursor, CollationOptions: CollationOptions, Promise: Promise_2, PkFactory: PkFactory, ClientMetadataOptions: ClientMetadataOptions, IndexDescription: IndexDescription, FindOperators: FindOperators, CommandOperationOptions: CommandOperationOptions, SetFields: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any> | undefined>]?: OptionalId<Flatten<TSchema[key]>> | AddToSetOperators<Array<OptionalId<Flatten<TSchema[key]>>>>} & NotAcceptedFields<TSchema, ReadonlyArray<any> | undefined> & {[p: string]: any}, OrderedBulkOperation: OrderedBulkOperation, RootFilterOperators: RootFilterOperators, BulkWriteOperationError: BulkWriteOperationError, MongoOptions: MongoOptions, CursorCloseOptions: CursorCloseOptions, PullOperator: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Partial<Flatten<TSchema[key]>> | FilterOperations<Flatten<TSchema[key]>>} & NotAcceptedFields<TSchema, ReadonlyArray<any>> & {[p: string]: any}, MongoGridFSChunkError: MongoGridFSChunkError, ClientSessionEvents: ClientSessionEvents, WithSessionCallback: (session: ClientSession) => (Promise<any> | void), OperationOptions: OperationOptions, ConnectionPoolOptions: ConnectionPoolOptions, Admin: Admin, SupportedTLSConnectionOptions: SupportedTLSConnectionOptions, MongoCredentialsOptions: MongoCredentialsOptions, OperationTime: Timestamp, DeleteManyModel: DeleteManyModel, WriteConcernOptions: WriteConcernOptions, SupportedTLSSocketOptions: SupportedTLSSocketOptions, BSONType: Readonly<{readonly double: 1, readonly string: 2, readonly object: 3, readonly array: 4, readonly binData: 5, readonly undefined: 6, readonly objectId: 7, readonly bool: 8, readonly date: 9, readonly null: 10, readonly regex: 11, readonly dbPointer: 12, readonly javascript: 13, readonly symbol: 14, readonly javascriptWithScope: 15, readonly int: 16, readonly timestamp: 17, readonly long: 18, readonly decimal: 19, readonly minKey: -1, readonly maxKey: 127}>, AggregateOptions: AggregateOptions, ServerSessionId: ServerSessionId, ClientMetadata: ClientMetadata, MongoDBNamespace: MongoDBNamespace, Binary: any, WithTransactionCallback: (session: ClientSession) => Promise<T>, TopologyDescriptionChangedEvent: TopologyDescriptionChangedEvent, PushOperator: {readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Flatten<TSchema[key]> | ArrayOperator<Array<Flatten<TSchema[key]>>>} & NotAcceptedFields<TSchema, ReadonlyArray<any>> & {[p: string]: any}, EndSessionOptions: EndSessionOptions, EstimatedDocumentCountOptions: EstimatedDocumentCountOptions, W: number | "majority", AbstractCursorOptions: AbstractCursorOptions, ServerSelector: (topologyDescription: TopologyDescription, servers: ServerDescription[]) => ServerDescription[], DropDatabaseOptions: CommandOperationOptions, ConnectionEvents: ConnectionEvents, DBRef: any, ReadPreferenceMode: Readonly<{readonly primary: "primary", readonly primaryPreferred: "primaryPreferred", readonly secondary: "secondary", readonly secondaryPreferred: "secondaryPreferred", readonly nearest: "nearest"}>, CommandFailedEvent: CommandFailedEvent, HostAddress: HostAddress, LoggerFunction: (message?: any, ...optionalParams: any[]) => void, MongoCompatibilityError: MongoCompatibilityError, FindOneAndUpdateOptions: FindOneAndUpdateOptions, Double: any, WithId: string extends keyof TSchema ? TSchema : (TSchema extends any ? Pick<TSchema, Exclude<keyof TSchema, "_id">> : never) & {_id: InferIdType<TSchema>}, MongoNetworkErrorOptions: MongoNetworkErrorOptions, RemoveUserOptions: CommandOperationOptions, GridFSBucketWriteStream: GridFSBucketWriteStream, Code: any, MongoNotConnectedError: MongoNotConnectedError, UpdateOptions: UpdateOptions, ConnectionCheckOutStartedEvent: ConnectionCheckOutStartedEvent, ServerClosedEvent: ServerClosedEvent, UpdateManyModel: UpdateManyModel, ProfilingLevel: Readonly<{readonly off: "off", readonly slowOnly: "slow_only", readonly all: "all"}>, SupportedNodeConnectionOptions: SupportedTLSConnectionOptions & SupportedTLSSocketOptions & SupportedSocketOptions, ReplaceOneModel: ReplaceOneModel, MongoWriteConcernError: MongoWriteConcernError, RunCommandOptions: CommandOperationOptions, WriteConcernError: WriteConcernError, CURSOR_FLAGS: readonly ["tailable", "oplogReplay", "noCursorTimeout", "awaitData", "exhaust", "partial"], MongoAPIError: MongoAPIError, MaxKey: any, MongoMissingDependencyError: MongoMissingDependencyError, CursorFlag: "tailable" | "oplogReplay" | "noCursorTimeout" | "awaitData" | "exhaust" | "partial", CommandSucceededEvent: CommandSucceededEvent, FinalizeFunction: (key: TKey, reducedValue: TValue) => TValue, Callback: (error?: AnyError, result?: T) => void, ServerHeartbeatSucceededEvent: ServerHeartbeatSucceededEvent, TopologyEvents: {serverOpening(event: ServerOpeningEvent): void, serverClosed(event: ServerClosedEvent): void, serverDescriptionChanged(event: ServerDescriptionChangedEvent): void, topologyClosed(event: TopologyClosedEvent): void, topologyOpening(event: TopologyOpeningEvent): void, topologyDescriptionChanged(event: TopologyDescriptionChangedEvent): void, error(error: Error): void, close(): void, timeout(): void} & Omit<{serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void, serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void, serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void, descriptionReceived(description: ServerDescription): void, closed(): void, ended(): void} & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & EventEmitterWithState, "connect"> & {connectionPoolCreated(event: ConnectionPoolCreatedEvent): void, connectionPoolClosed(event: ConnectionPoolClosedEvent): void, connectionPoolCleared(event: ConnectionPoolClearedEvent): void, connectionCreated(event: ConnectionCreatedEvent): void, connectionReady(event: ConnectionReadyEvent): void, connectionClosed(event: ConnectionClosedEvent): void, connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void, connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void, connectionCheckedOut(event: ConnectionCheckedOutEvent): void, connectionCheckedIn(event: ConnectionCheckedInEvent): void} & Omit<ConnectionEvents, "close" | "message"> & ConnectionEvents & EventEmitterWithState, MongoServerError: MongoServerError, OnlyFieldsOfType: true extends (false & TSchema[keyof TSchema]) ? Record<string, FieldType> : (AcceptedFields<TSchema, FieldType, AssignableType> & NotAcceptedFields<TSchema, FieldType> & Record<string, AssignableType>), LoggerLevel: Readonly<{readonly ERROR: "error", readonly WARN: "warn", readonly INFO: "info", readonly DEBUG: "debug", readonly error: "error", readonly warn: "warn", readonly info: "info", readonly debug: "debug"}>, Document: any, ObjectId: any, Sort: string | 1 | -1 | "asc" | "desc" | "ascending" | "descending" | string[] | {[p: string]: SortDirection} | Map<string, SortDirection> | [string, SortDirection][] | [string, (1 | -1 | "asc" | "desc" | "ascending" | "descending" | {$meta: string})]}, SortValues: -1 | 1 | "asc" | "desc", AcceptsDiscriminator: AcceptsDiscriminator, FlattenMaps: FlattenMaps, NativeDate: NativeDate, MongooseOptions: MongooseOptions, IndexesDiff: IndexesDiff, PostMiddlewareFunction: (this:ThisType, res: ResType, next: (err?: CallbackError) => void) => (void | Promise<void>), VirtualTypeOptions: VirtualTypeOptions, ExtractQueryHelpers: M extends Model<any, infer TQueryHelpers, any, any> ? TQueryHelpers : {}, _UpdateQueryDef: _UpdateQueryDef, _UpdateQuery: _UpdateQuery, QueryWithHelpers: Query<ResultType, DocType, THelpers, RawDocType> & THelpers, Unpacked: T extends infer U[] ? U : (T extends ReadonlyArray<infer U> ? U : T), AggregationCursor: AggregationCursor, SchemaDefinition: T extends undefined ? {[p: string]: SchemaDefinitionProperty} : {[path in keyof T]?: SchemaDefinitionProperty<T[path]>}, SchemaPreOptions: SchemaPreOptions, _FilterQuery: {[P in keyof T]?: Condition<T[P]>} & RootQuerySelector<T>, LegacyAsyncValidateFn: LegacyAsyncValidateFn, UpdateQuery: _UpdateQuery<_UpdateQueryDef<T>> & ReadonlyPartial<_UpdateQueryDef<LeanDocument<T>>> & AnyObject, Mixed: Schema.Types.Mixed, ExtractVirtuals: M extends Model<any, any, any, infer TVirtuals> ? TVirtuals : {}, Error: Error, PopulateOptions: PopulateOptions, ValidateOpts: ValidateOpts, SchemaDefinitionProperty: T extends number ? (typeof Number | "number" | "Number" | typeof Schema.Types.Number) : (T extends string ? (typeof String | "string" | "String" | typeof Schema.Types.String) : (T extends boolean ? (typeof Boolean | "boolean" | "Boolean" | typeof Schema.Types.Boolean) : (T extends NativeDate ? (typeof NativeDate | "date" | "Date" | typeof Schema.Types.Date) : (Function | string)))) | SchemaTypeOptions<T extends undefined ? any : T> | SchemaType | Schema<any, any, any> | Schema<any, any, any>[] | SchemaTypeOptions<T extends undefined ? any : T>[] | Function[] | T extends undefined ? {[p: string]: SchemaDefinitionProperty} : {[path in keyof T]?: SchemaDefinitionProperty<T[path]>} | SchemaDefinition<T>[], IndexDefinition: IndexDefinition, Mongoose: {new(options?: (MongooseOptions | null)): typeof mongoose}, Callback: (error: CallbackError, result: T) => void, __UpdateDefProperty: [Extract<T, ObjectId>] extends [never] ? T : (string | T), ApplyBasicQueryCasting: T extends ObjectId ? (string | (string | T)[] | T) : (T extends string ? (RegExp | T[] | T) : (T extends infer U[] ? (T | U) : (T[] | T))), actualPrimitives: string | boolean | number | bigint | symbol | null | undefined, CallbackWithoutResult: (error: CallbackError) => void, STATES: module:mongoose.ConnectionStates, AnyObject: AnyObject, GeoSearchOptions: GeoSearchOptions, AnyArray: T[] | ReadonlyArray<T>, QuerySelector: QuerySelector, QueryCursor: QueryCursor, SaveOptions: SaveOptions, UpdateWriteOpResult: UpdateResult, LeanDocumentOrArray: 0 extends (1 & T) ? T : (T extends unknown[] ? LeanDocument<T[number]>[] : (T extends Document ? LeanDocument<T> : T)), ConnectOptions: ConnectOptions, Schema: Schema, Query: Query, Types: Types, UpdateAggregationStage: {$addFields: any} | {$set: any} | {$project: any} | {$unset: any} | {$replaceRoot: any} | {$replaceWith: any}, deleteModel: (name: (string | RegExp)) => typeof mongoose, SchemaType: SchemaType, LeanArray: T extends unknown[][] ? LeanArray<T[number]>[] : LeanType<T[number]>[], connections: Connection[], pluralize: (fn?: (((str: string) => string) | null)) => (((str: string) => string) | null), RefType: number | string | Buffer | mongoose.Types.ObjectId | mongoose.Types.Buffer | Number | String | Buffer | ObjectId | undefined, FilterQuery: {[P in keyof T]?: Condition<T[P]>} & RootQuerySelector<T>, NativeError: NativeError, get: <K extends keyof MongooseOptions>(key: K) => MongooseOptions[K], now: () => NativeDate, UpdateWithAggregationPipeline: UpdateAggregationStage[], SchemaTypeOptions: SchemaTypeOptions, DocumentDefinition: DocumentDefinition, TreatAsPrimitives: string | boolean | number | bigint | symbol | null | undefined | NativeDate | RegExp | Error | BigInt | Types.ObjectId, LeanDocument: LeanDocument, PreSaveMiddlewareFunction: (this:T, next: (err?: CallbackError) => void, opts: SaveOptions) => (void | Promise<void>), RootQuerySelector: RootQuerySelector, InsertManyResult: InsertManyResult, Connection: Connection, Number: Number, Collection: Collection, ValidatorMessageFn: ValidatorMessageFn, TagSet: TagSet, EnforceDocument: T extends Document ? Require_id<T> : (Document<any, any, T> & Require_id<T> & TVirtuals & TMethods), QueryOptions: QueryOptions, Decimal128: Schema.Types.Decimal128, VirtualType: VirtualType, SchemaDefinitionWithBuiltInClass: T extends number ? (typeof Number | "number" | "Number" | typeof Schema.Types.Number) : (T extends string ? (typeof String | "string" | "String" | typeof Schema.Types.String) : (T extends boolean ? (typeof Boolean | "boolean" | "Boolean" | typeof Schema.Types.Boolean) : (T extends NativeDate ? (typeof NativeDate | "date" | "Date" | typeof Schema.Types.Date) : (Function | string)))), IndexDirection: 1 | -1 | "2d" | "2dsphere" | "geoHaystack" | "hashed" | "text", SchemaTypes: {Array: Array, Boolean: Boolean, Buffer: Buffer, Date: Date, Decimal128: Decimal128, DocumentArray: DocumentArray, Map: Map, Mixed: Mixed, Number: Number, ObjectId: ObjectId, Subdocument: Subdocument, String: String}, SchemaPostOptions: SchemaPostOptions}}
 *
 */
export const ORM: {
    Date: any;
    Aggregate: any;
    ClientSession: any;
    ValidatorProps: any;
    NumericTypes: number | any | any | any | any;
    Models: any;
    LeanDocumentOrArrayWithRawType: any;
    _LeanDocument: any;
    AnyKeys: any;
    version: string;
    AddToSetOperators: any;
    SchemaOptions: any;
    PopulatedDoc: any | any;
    models: any;
    plugin: (fn: (schema: any, opts?: any) => void, opts?: any) => any;
    InsertManyOptions: any;
    pathsToValidate: string[] | string;
    ErrorHandlingMiddlewareFunction: (this: ThisType<any>, err: any, res: any, next: (err?: any) => void) => void;
    connect: (uri: string, options: any, callback: any) => void;
    CallbackError: any | null;
    ConnectionStates: NodeModule;
};
//# sourceMappingURL=index.d.ts.map