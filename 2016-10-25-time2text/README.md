# Time-2-Text TDD Challenge

## Goal

The goal is to develop a time-2-text converter function (time2text) that
converts time strings (formatted as 'HH:MM') to human readable text so that a
virtual assistants such as Siri can read the text to our blind users.

## Constraints

The input will always be a valid time between '00:00' and '24:00'.

## Requirements

'08:54' should be converted to 'eight fifty-four in the morning'. Before 12:00 'in the morning' should be used. And before 6pm 'in the afternoon'. After 6pm the time should say 'in the evening'. Midnight and noon should result in 'midnight' and 'noon' respectively ('in the morning' etc. is not necessary in these casees). Consider half past, quarter to and quarter past (e.g. 13:30 results in 'half past one in the afternoon'). The same applies to 5, 10 and 20 past/to. Leading zeros should result in 'oh' (e.g. 23:03 results in 'eleven oh three in
the evening'). Consider combinations of the above rules (e.g. '11:55' should result in 'five to noon'). The full hour should say "o'clock" (e.g. 16:00 should result in 'four o'clock in the afternoon').

## How to install

```
> npm install
```

## How to verify results

```
> npm start
```
