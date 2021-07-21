import type { NextApiRequest, NextApiResponse } from 'next'
import {join} from 'path'
import fs from 'fs';

import matter from 'gray-matter';

const aboutFilePath = join(process.cwd(), 'contents/About/index.md');

export type PersonalInfoType = {
  field: string,
  value: string
}

export type AboutMeType = {
    content: string,
    infos: PersonalInfoType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutMeType>
) {
    const fileContents = fs.readFileSync(aboutFilePath, 'utf8');
    const { data, content } = matter(fileContents);
    let infos: PersonalInfoType[] = Object.keys(data).map(key => {return {field: key, value: data[key]}})
  res.status(200).json({content, infos})
}
