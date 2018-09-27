# Simple column chooser

A lightweight column chooser Angular (2+) library for tables.

#### Usage
```sh
<table columnChooser #table1="columnChooser" <--- 'required (1)'> 
    <thead> <--- 'required'
        <tr>
            <th data-options <--- 'optional (2)'>
                Col 1
            </th>
        </tr>
    </thead>
    <tbody> <--- 'required'
        <tr>
            <td> Col data 1 </td>
        </tr>
    </tbody>
</table>

<app-column-chooser [chooser]="table1" <-- 'Pass (1) value here' ></app-column-chooser>
```

#### Options (data-options (2))
  - data-required="true"
  - data-eliminate="true"
  - data-title="some string value"
  - data-hide="true"

### Example

```sh
<table columnChooser #table1="columnChooser">
    <thead>
        <tr>
            <th data-eliminate="true">Select</th>
            <th data-title="Time line">Month</th>
            <th data-hide="true">hide Savings</th>
            <th data-required="true">show Savings</th>
            <th data-hide="true">show Savings21</th>
            <th data-eliminate="true">
                <app-column-chooser [chooser]="table1"></app-column-chooser>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="checkbox" /></td>
            <td>row 1</td>
            <td>col 1</td>
            <td>col 2</td>
            <td>col 3</td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>row 2</td>
            <td>col 1</td>
            <td>col 2</td>
            <td>col 3</td>
        </tr>
    </tbody>
</table>
```