import React, { useContext } from "react";
import { IAnyStateTreeNode, resolvePath } from "mobx-state-tree";

const MSTContext = React.createContext(null);

export const MSTProvider = MSTContext.Provider;

export const useMST = <Type>(path?: string): Type => {
  const rootStore = useContext(MSTContext) as unknown as IAnyStateTreeNode;
  if (rootStore === null) {
    throw new Error("Store cannot be null add a context provider");
  }

  if (path !== undefined) {
    const byPath = resolvePath(rootStore, path);

    if (byPath === null) {
      throw new Error(`Cannot resolve path ${path}`);
    }
    return byPath;
  }

  return rootStore;
};
