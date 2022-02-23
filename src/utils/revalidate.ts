import type { NextApiResponse } from "next";

export default async function revalidate(res: NextApiResponse, path = "/") {
  try {
    await res.unstable_revalidate(path);
    return { revalidated: true };
  } catch (err) {
    return { revalidated: false, error: err };
  }
}
