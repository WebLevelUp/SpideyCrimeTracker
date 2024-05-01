CREATE TABLE [Area] (
  [areaId] int PRIMARY KEY,
  [suburb] varchar(50),
  [province] varchar(50)
)
GO

CREATE TABLE [User] (
  [userId] int PRIMARY KEY,
  [username] varchar(max),
  [roleId] int
)
GO

CREATE TABLE [Incident] (
  [incidentId] int PRIMARY KEY,
  [date] datetime2,
  [description] varchar(max),
  [userId] int,
  [hotspotId] int
)
GO

CREATE TABLE [Role] (
  [roleId] int PRIMARY KEY,
  [roleType] varchar(50)
)
GO

CREATE TABLE [HotspotType] (
  [hotspotTypeId] int PRIMARY KEY,
  [hotspotType] varchar(50)
)
GO

CREATE TABLE [Hotspot] (
  [hotspotId] int PRIMARY KEY,
  [description] varchar(max),
  [areaId] int,
  [hotspotTypeId] int
)
GO

ALTER TABLE [User] ADD FOREIGN KEY ([roleId]) REFERENCES [Role] ([roleId])
GO

ALTER TABLE [Incident] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([userId])
GO

ALTER TABLE [Incident] ADD FOREIGN KEY ([hotspotId]) REFERENCES [Hotspot] ([hotspotId])
GO

ALTER TABLE [Hotspot] ADD FOREIGN KEY ([areaId]) REFERENCES [Area] ([areaId])
GO

ALTER TABLE [Hotspot] ADD FOREIGN KEY ([hotspotTypeId]) REFERENCES [HotspotType] ([hotspotTypeId])
GO
