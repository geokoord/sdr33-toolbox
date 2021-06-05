# Toolbox for Sokkia SDR33 format

## Motivation

This toolbox allows you to create survey job data in SDR33 format from sokkia.
Currently the point/coordinate exchange is in the focus of the development.

## Scope

- Import GeoJSON file
- Add coordinates manually
- Create SDS33 export message

## Installation

```ts
npm i sdr33;
```

## Usage

**Import GeoJSON file**

```ts
import sdr from "sdr33";
let sdrmessage = sdr.Sdr33Export.fromGeoJson("./ref.geojson");
```

**Add coordinates manually**

```ts
//Job name
let sdrmessage = new sdr.Sdr33Export("New-Job");

//Point name, North value, East value, Elevation, Point description
sdrmessage.addCoordinate(new sdr.Coordinate("103.0001", 0, 0, 0, ""));
```

**Create SDS33 export message**

```ts
let sdr33message = res.getMessage();
```

## Communication with Sokkia NET

### Measure

command "◄" (0x11>) ASCII 17 (Device Control 1)
