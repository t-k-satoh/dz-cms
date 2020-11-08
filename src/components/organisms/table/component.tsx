import _, { keys } from 'lodash';
import React from 'react';
import * as Styles from './styles';

type Props = {
    columns: { key: string; title: string; type: 'string' | 'boolean' | 'number' | 'image' | 'link' }[];
    data: Record<string, string | boolean | number>[];
};

export const Table: React.FC<Props> = ({ columns, data }) => {
    const isCorrectData = React.useMemo(() => {
        const columnsKeys = columns.map((column) => column.key);
        const dataKeys = data.map((_data) => Object.keys(_data));

        return dataKeys.every((dataKey) => _.isEqual(_.sortBy(columnsKeys), _.sortBy(dataKey)));
    }, [columns, data]);

    if (!isCorrectData) {
        return <p>Invalid Data</p>;
    }

    const dataValues = React.useMemo(() => data.map((_data) => Object.values(_data)), [data]);

    const newColumns = React.useMemo(() => {
        const shortTitleLength = columns.map((column) => column.title.length).reduce((a, b) => Math.min(a, b));

        return columns.map((column) => `${column.title.length / shortTitleLength}fr`);
    }, [columns]);

    const newData = React.useMemo(
        () =>
            data.map((_data) =>
                Object.keys(_data).map((key) => ({
                    key,
                    value: _data[key],
                    type: columns.find((column) => column.key === key).type,
                })),
            ),
        [data, columns],
    );

    console.log(newData);

    return (
        <Styles.Table>
            <Styles.TableRow columns={newColumns}>
                {columns.map(({ title, key }) => (
                    <Styles.TableHeaderChild key={key}>{title}</Styles.TableHeaderChild>
                ))}
            </Styles.TableRow>
            {dataValues.map((dataValue, index) => {
                return (
                    <Styles.TableRow key={index} columns={newColumns}>
                        {dataValue.map((_dataValue, _index) => {
                            return (
                                <Styles.TableDataChild key={`${index}_${_index}`}>
                                    {String(_dataValue)}
                                </Styles.TableDataChild>
                            );
                        })}
                    </Styles.TableRow>
                );
            })}
        </Styles.Table>
    );
};
