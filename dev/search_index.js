var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ArtifactUtils","category":"page"},{"location":"#ArtifactUtils","page":"Home","title":"ArtifactUtils","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"add_artifact!","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ArtifactUtils]","category":"page"},{"location":"#ArtifactUtils.add_artifact!-Tuple{String,String,String}","page":"Home","title":"ArtifactUtils.add_artifact!","text":"function add_artifact!(\n    artifacts_toml::String, name::String, tarball_url::String;\n    clear=true,\n    platform::Union{Platform,Nothing}=nothing,\n    lazy::Bool=false,\n    force::Bool=false\n)\n\nDownloads tarball from tarball_url, extracts it and adds it as an artifact with name name to the file artifacts_toml. If clear is true, the artifact itself is deleted afterwards. The rest of the keyword arguments are passed to Pkg.Artifacts.bind_artifact!.\n\nFrom its docstring:\n\nIf platform is not nothing, this artifact is marked as platform-specific, and will be a multi-mapping.  It is valid to bind multiple artifacts with the same name, but different platforms and hash'es within the same artifacts_toml.  If force is set to true, this will overwrite a pre-existant mapping, otherwise an error is raised.[...] If lazy is set to true, even if download information is available, this artifact will not be downloaded until it is accessed via the artifact\"name\" syntax, or ensure_artifact_installed() is called upon it.\n\n\n\n\n\n","category":"method"}]
}
