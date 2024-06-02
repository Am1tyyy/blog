import React from 'react';
import { render } from '@testing-library/react';
import { getFileType, getFileName, getFileExtension } from '../utils/filesHelper';


describe('getFileType', () => {
  it('returns the correct file type for various file extensions', () => {
    expect(getFileType('file.pdf')).toEqual('pdf');
    expect(getFileType('document.docx')).toEqual('docx');
    expect(getFileType('spreadsheet.xlsx')).toEqual('xlsx');
    expect(getFileType('presentation.pptx')).toEqual('pptx');
    expect(getFileType('archive.zip')).toEqual('zip');
    expect(getFileType('image.jpg')).toEqual('jpg');
    expect(getFileType('video.mp4')).toEqual('mp4');
    expect(getFileType('video.webm')).toEqual('webm');
    expect(getFileType('text.txt')).toEqual('txt');
  });

  it('returns an empty string for unknown file extensions', () => {
    expect(getFileType('unknown')).toEqual('');
  });
});

describe('getFileName', () => {
  it('returns the correct file name from the given file path', () => {
    expect(getFileName('/path/to/file.pdf')).toEqual('file.pdf');
    expect(getFileName('path/to/document.docx')).toEqual('document.docx');
    expect(getFileName('path/to/spreadsheet.xlsx')).toEqual('spreadsheet.xlsx');
  });

  it('returns an empty string if the file path is empty', () => {
    expect(getFileName('')).toEqual('');
  });
});

describe('getFileExtension', () => {
  it('returns the correct file extension for a given file', () => {
    const file = { name: 'file.pdf' };
    expect(getFileExtension(file as File)).toEqual('pdf');
  });
});


