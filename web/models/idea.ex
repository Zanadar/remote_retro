defmodule RemoteRetro.Idea do
  @moduledoc false
  use RemoteRetro.Web, :model

  @derive {Poison.Encoder, except: [:__meta__, :retro]}
  schema "ideas" do
    field :category, :string
    field :body, :string

    belongs_to :retro, RemoteRetro.Retro, type: Ecto.UUID

    timestamps()
  end

  @required_fields [:category, :body, :retro_id]

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @required_fields)
    |> validate_required(@required_fields)
  end
end
